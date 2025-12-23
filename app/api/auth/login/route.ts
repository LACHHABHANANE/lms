import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-it-in-env";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email et mot de passe requis." },
                { status: 400 }
            );
        }

        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "Identifiants invalides." },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Identifiants invalides." },
                { status: 401 }
            );
        }

        // Create JWT Token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role, name: user.name },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Set HTTP-only cookie
        (await cookies()).set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 86400, // 1 day
            path: "/",
        });

        return NextResponse.json(
            {
                message: "Connexion réussie.",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { message: "Une erreur est survenue lors de la connexion." },
            { status: 500 }
        );
    }
}
