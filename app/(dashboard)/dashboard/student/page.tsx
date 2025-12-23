"use client";

import Link from "next/link";

export default function StudentDashboard() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1: My Courses */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-indigo-50 rounded-lg p-3">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Mes Cours Inscrits</dt>
                                    <dd className="text-3xl font-bold text-gray-900">3</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                        <div className="text-sm">
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-900 flex items-center gap-1">
                                Voir tous les cours
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 2: Progress */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-green-50 rounded-lg p-3">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Progression Moyenne</dt>
                                    <dd className="text-3xl font-bold text-gray-900">78%</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                        <div className="text-sm">
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-900 flex items-center gap-1">
                                Voir le rapport
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 3: Next Lesson */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-yellow-50 rounded-lg p-3">
                                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">Prochaine Leçon</dt>
                                    <dd className="text-lg font-bold text-gray-900 truncate">Matrices (Algèbre)</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                        <div className="text-sm">
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-900 flex items-center gap-1">
                                Reprendre
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Activité Récente</h3>
                    <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Voir tout</Link>
                </div>
                <ul className="divide-y divide-gray-100">
                    <li className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                <p className="text-sm font-medium text-gray-900">Exercice complété : Dérivation</p>
                            </div>
                            <div className="flex-shrink-0 flex">
                                <p className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">100%</p>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <p className="flex items-center text-sm text-gray-500">
                                Cours : Analyse 1
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
                                Il y a 2 heures
                            </p>
                        </div>
                    </li>
                    <li className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                <p className="text-sm font-medium text-gray-900">Nouveau chapitre débloqué</p>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <p className="flex items-center text-sm text-gray-500">
                                Cours : Probabilités
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
                                Hier
                            </p>
                        </div>
                    </li>
                    <li className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                                <p className="text-sm font-medium text-gray-900">Inscription au cours</p>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <p className="flex items-center text-sm text-gray-500">
                                Cours : Algèbre Linéaire
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
                                Il y a 3 jours
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
