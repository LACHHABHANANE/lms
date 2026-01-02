import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
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

export async function POST(req: Request) {
    try {
        await dbConnect();
        const user = await getUser(req);

        if (!user || user.role !== 'instructor') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { title, description, price, level } = body;

        if (!title || !description || price === undefined) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const course = await Course.create({
            title,
            description,
            price,
            level: level || 'Autre',
            instructor: user.id,
            status: 'published', // Auto-publish for simplicity for now
        });

        return NextResponse.json({ success: true, course }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
