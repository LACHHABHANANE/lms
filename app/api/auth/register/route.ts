import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { name, email, password, role } = await req.json();

        if (!name || !email || !password || !role) {
            return NextResponse.json(
                { message: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        await dbConnect();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "Cet email est déjà utilisé." },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return NextResponse.json(
            { message: "Utilisateur créé avec succès.", user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role } },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json(
            { message: "Une erreur est survenue lors de l'inscription." },
            { status: 500 }
        );
    }
}
