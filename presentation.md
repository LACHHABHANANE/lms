# Crack the Maths --- Présentation & Guide (Next.js LMS)

Un mini Learning Management System (LMS) développé avec **Next.js**,
**TypeScript**, **MongoDB** et **Tailwind CSS**, permettant aux élèves
d'apprendre les mathématiques et aux enseignants de gérer leurs cours.

------------------------------------------------------------------------

## 🎯 Objectifs pédagogiques

-   Comprendre la structure d'un projet **Next.js (App Router)**
-   Apprendre à connecter une application à **MongoDB**
-   Implémenter une authentification simple (élève / enseignant)
-   Organiser un projet full-stack moderne

------------------------------------------------------------------------

## 📂 Structure du projet (avec explications)

``` bash
app/
 ├── (auth)/              # Pages d'authentification
 │    ├── login/page.tsx  # Formulaire de connexion
 │    └── register/page.tsx # Formulaire d'inscription
 │
 ├── (dashboard)/         # Espaces protégés
 │    ├── student/page.tsx    # Tableau de bord élève
 │    └── instructor/page.tsx # Tableau de bord enseignant
 │
 ├── (public)/            # Pages visibles par tout le monde
 │    └── page.tsx        # Accueil du site
 │
 ├── api/                 # API backend (Next.js API routes)
 │    ├── auth/
 │    │    ├── login/route.ts     # API login
 │    │    └── register/route.ts  # API register
 │    ├── courses/
 │    │    ├── route.ts           # GET / POST cours
 │
 └── layout.tsx           # Layout global (header, styles, etc.)

middleware.ts              # Protection des routes (auth)
models/
 ├── User.ts              # Modèle utilisateur
 ├── Course.ts            # Modèle cours
 └── Enrollment.ts        # Progression & inscriptions

lib/
 ├── db.ts                # Connexion MongoDB
 └── auth.ts              # Fonctions auth / tokens

public/
 └── assets (images, logos)

.env.local                 # Variables secrètes
tailwind.config.ts         # Configuration Tailwind
```

------------------------------------------------------------------------

## 🛠 Étapes de création du projet (avec commandes)

### 1️⃣ Créer le projet Next.js

``` bash
npx create-next-app@latest lms
cd lms
```

### 2️⃣ Installer les dépendances principales

``` bash
npm install mongoose bcryptjs jsonwebtoken jose
npm install -D eslint
```

### 3️⃣ Installer et configurer Tailwind CSS

``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Dans `app/globals.css` :

``` css
@import "tailwindcss";
```

### 4️⃣ Configurer MongoDB

`lib/db.ts` :

``` ts
import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(process.env.MONGODB_URI as string);
};
```

`.env.local` :

``` env
MONGODB_URI=mongodb://localhost:27017/lms
JWT_SECRET=supersecret
```

### 5️⃣ Créer les modèles MongoDB

#### User.ts

``` ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Student", "Instructor"] }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
```

#### Course.ts

``` ts
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String,
  price: Number,
  instructorId: String
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
```

### 6️⃣ Authentification --- Register API

`app/api/auth/register/route.ts` :

``` ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();

  const { name, email, password, role } = await req.json();
  const hashed = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashed, role });

  return NextResponse.json({ message: "User created" });
}
```

### 7️⃣ Protection des pages

`middleware.ts` :

``` ts
import { NextResponse } from "next/server";

export function middleware(req: any) {
  const isLogged = req.cookies.get("token");

  if (!isLogged && req.nextUrl.pathname.startsWith("/(dashboard)")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
```

### 8️⃣ Lancer le projet

``` bash
npm run dev
```

Ouvrir :

    http://localhost:3000

------------------------------------------------------------------------

## ✅ Conclusion

Ce projet illustre une architecture Next.js moderne avec backend +
frontend intégrés, authentification, base de données, et organisation
claire du code.
