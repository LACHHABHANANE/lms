import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// We use 'jose' here because standard 'jsonwebtoken' often has issues in Edge Runtime
// Note: You need to `npm install jose` if you use it in middleware, or use a workaround.
// Since we installed jsonwebtoken, let's try a standard approach but 'jose' is better for Edge middleware.
// For simplicity in this Node.js environment request, we will check cookie presence, 
// but verifying JWT signature in Edge Middleware usually requires 'jose' or 'next-auth'.
// Let's assume we do basic cookie check here and full verify server-side or install jose.
// Plan: I'll stick to basic cookie existence + decoding if possible, OR I will just use `jose`.
// Easier: I'll use `jose` which is standard for Next.js Middleware.

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const { pathname } = request.nextUrl;

    // Protect Dashboard Routes
    if (pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }

        try {
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET || "your-secret-key-change-it-in-env"
            );
            const { payload } = await jwtVerify(token, secret);
            const role = payload.role as string;

            // Role-based access control
            if (pathname.startsWith('/dashboard/student') && role !== 'student') {
                return NextResponse.redirect(new URL('/dashboard/instructor', request.url));
            }
            if (pathname.startsWith('/dashboard/instructor') && role !== 'instructor') {
                return NextResponse.redirect(new URL('/dashboard/student', request.url));
            }

        } catch (error) {
            // Invalid token
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    // Redirect authenticated users away from auth pages
    if ((pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register')) && token) {
        try {
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET || "your-secret-key-change-it-in-env"
            );
            const { payload } = await jwtVerify(token, secret);
            const role = payload.role as string;

            if (role === 'student') {
                return NextResponse.redirect(new URL('/dashboard/student', request.url));
            } else if (role === 'instructor') {
                return NextResponse.redirect(new URL('/dashboard/instructor', request.url));
            }
        } catch (e) {
            // Token invalid, allow access to login
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth/:path*'],
};
