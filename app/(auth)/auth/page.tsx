"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function AuthForm() {
    const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  
  useEffect(() => {
    setMode(searchParams.get("mode") === "register" ? "register" : "login");
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const toggleMode = () => {
    const newMode = mode === "login" ? "register" : "login";
    setMode(newMode);
    router.push(`/auth?mode=${newMode}`);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Une erreur est survenue");
      }

      if (mode === "register") {
        setSuccess("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
        setMode("login");
        router.push("/auth?mode=login");
      } else {
        // Login successful
        if (data.user.role === 'student') {
          router.push('/dashboard/student');
        } else {
          router.push('/dashboard/instructor');
        }
        router.refresh(); // Refresh to update layouts
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-200 shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
                </div>
            </Link>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          {mode === "login" ? "Bon retour parmi nous" : "Créer un nouveau compte"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === "login" ? "Pas encore de compte ? " : "Déjà un compte ? "}
          <button onClick={toggleMode} className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors focus:outline-none">
            {mode === "login" ? "Inscrivez-vous gratuitement" : "Connectez-vous"}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-100 sm:rounded-2xl sm:px-10 border border-gray-50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center">
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {error}
              </div>
            )}
             {success && (
              <div className="bg-green-50 border border-green-100 text-green-600 px-4 py-3 rounded-xl text-sm flex items-center">
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {success}
              </div>
            )}
            
            {mode === "register" && (
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                </label>
                <div className="mt-1">
                    <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                    />
                </div>
                </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                />
              </div>
            </div>

            {mode === "register" && (
                 <div>
                 <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                   Je suis :
                 </label>
                 <div className="mt-1 grid grid-cols-2 gap-3">
                   <div 
                     onClick={() => setFormData({...formData, role: 'student'})}
                     className={`cursor-pointer border rounded-lg py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 transition-all ${formData.role === 'student' ? 'ring-2 ring-indigo-500 border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'}`}
                   >
                     Étudiant
                   </div>
                   <div 
                     onClick={() => setFormData({...formData, role: 'instructor'})}
                     className={`cursor-pointer border rounded-lg py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 transition-all ${formData.role === 'instructor' ? 'ring-2 ring-indigo-500 border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'}`}
                   >
                     Instructeur
                   </div>
                 </div>
               </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={mode === 'login' ? "current-password" : "new-password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                />
              </div>
            </div>

            {mode === "login" && (
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Se souvenir de moi
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Mot de passe oublié ?
                    </a>
                </div>
                </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 shadow-lg shadow-indigo-200'}`}
              >
                {loading ? 'Traitement...' : (mode === "login" ? 'Se connecter' : 'Créer mon compte')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthForm />
        </Suspense>
    )
}
