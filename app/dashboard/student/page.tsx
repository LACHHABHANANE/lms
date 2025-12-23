"use client";

import { useRouter } from "next/navigation";

export default function StudentDashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/auth/login");
        router.refresh();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-indigo-700 text-white pb-32">
                <header className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Mon Tableau de Bord (Étudiant)</h1>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-indigo-800 hover:bg-indigo-900 rounded-md text-sm font-medium transition-colors"
                        >
                            Déconnexion
                        </button>
                    </div>
                </header>
            </div>

            <main className="py-10 -mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1: My Courses */}
                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Mes Cours Inscrits</dt>
                                        <dd className="text-3xl font-semibold text-gray-900">3</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-700 hover:text-indigo-900 pl-1">Voir tous les cours</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Progress */}
                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Progression Moyenne</dt>
                                        <dd className="text-3xl font-semibold text-gray-900">78%</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-700 hover:text-indigo-900 pl-1">Voir le rapport</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Next Lesson */}
                    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Prochaine Leçon</dt>
                                        <dd className="text-lg font-semibold text-gray-900">Matrices (Algèbre)</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-700 hover:text-indigo-900 pl-1">Reprendre</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Activité Récente</h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        <li className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">Exercice complété : Dérivation</p>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">100%</p>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                        Cours : Analyse 1
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <p>Il y a 2 heures</p>
                                </div>
                            </div>
                        </li>
                        <li className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">Nouveau chapitre débloqué</p>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                        Cours : Probabilités
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <p>Hier</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
