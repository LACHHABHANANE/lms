import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import Enrollment from '@/models/Enrollment';
import User from '@/models/User';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-at-least-32-chars-long');

async function getUser(req: Request) {
    const token = (await cookies()).get('token')?.value;
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload;
    } catch {
        return null;
    }
}

export async function GET(req: Request) {
    try {
        await dbConnect();
        const user = await getUser(req);

        if (!user || user.role !== 'instructor') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 1. Get all courses by this instructor
        const courses = await Course.find({ instructor: user.id });
        const courseIds = courses.map(c => c._id);

        // 2. Count active courses
        const activeCoursesCount = courses.filter(c => c.status === 'published').length;

        // 3. Get enrollments for these courses
        const enrollments = await Enrollment.find({ course: { $in: courseIds } })
            .populate('student', 'name email')
            .populate('course', 'title price')
            .sort({ enrolledAt: -1 });

        // 4. Calculate stats
        const totalStudents = new Set(enrollments.map(e => e.student._id.toString())).size;

        // Calculate revenue (sum of price of courses in enrollments)
        // Note: In a real app, you'd store the transaction price in enrollment or a Transaction model
        const totalRevenue = enrollments.reduce((acc, curr) => acc + (curr.course.price || 0), 0);

        // 5. Get recent students (limit 5)
        const recentEnrollments = enrollments.slice(0, 5).map(e => ({
            id: e.student._id,
            name: e.student.name,
            email: e.student.email,
            courseTitle: e.course.title,
            enrolledAt: e.enrolledAt,
            status: 'Actif' // Placeholder
        }));

        return NextResponse.json({
            stats: {
                totalStudents,
                activeCourses: activeCoursesCount,
                totalRevenue,
                newEnrollments: enrollments.filter(e => {
                    const thirtyDaysAgo = new Date();
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                    return new Date(e.enrolledAt) > thirtyDaysAgo;
                }).length
            },
            recentStudents: recentEnrollments
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
