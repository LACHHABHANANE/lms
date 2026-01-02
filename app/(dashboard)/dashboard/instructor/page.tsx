"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import Button from "@/app/components/ui/Button";

interface DashboardStats {
    totalStudents: number;
    activeCourses: number;
    totalRevenue: number;
    newEnrollments: number;
}

interface RecentStudent {
    id: string;
    name: string;
    email: string;
    courseTitle: string;
    status: string;
}

export default function InstructorDashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [recentStudents, setRecentStudents] = useState<RecentStudent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch('/api/dashboard/instructor/stats');
                if (res.ok) {
                    const data = await res.json();
                    setStats(data.stats);
                    setRecentStudents(data.recentStudents);
                }
            } catch (error) {
                console.error("Failed to fetch stats", error);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-[50vh] text-gray-500">Chargement des données...</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
                <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1: Total Students */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6 flex items-center">
                        <div className="flex-shrink-0 bg-purple-50 rounded-lg p-3">
                            <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500 truncate">Total Étudiants</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.totalStudents || 0}</p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Active Courses */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6 flex items-center">
                        <div className="flex-shrink-0 bg-blue-50 rounded-lg p-3">
                            <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500 truncate">Cours Actifs</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.activeCourses || 0}</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Revenue */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6 flex items-center">
                        <div className="flex-shrink-0 bg-green-50 rounded-lg p-3">
                            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500 truncate">Revenus</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.totalRevenue || 0} €</p>
                        </div>
                    </div>
                </div>

                {/* Card 4: New Enrollments */}
                <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6 flex items-center">
                        <div className="flex-shrink-0 bg-orange-50 rounded-lg p-3">
                            <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm font-medium text-gray-500 truncate">Nouveaux (30j)</p>
                            <p className="text-2xl font-bold text-gray-900">+{stats?.newEnrollments || 0}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Enrollments */}
                <div className="lg:col-span-2 bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-lg leading-6 font-bold text-gray-900">Derniers étudiants inscrits</h3>
                        <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Voir tout</Link>
                    </div>
                    <ul className="divide-y divide-gray-100">
                        {recentStudents.length > 0 ? (
                            recentStudents.map((student) => (
                                <li key={student.id} className="px-6 py-4 flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold uppercase">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <p className="text-sm font-medium text-gray-900">{student.name}</p>
                                        <p className="text-xs text-gray-500">{student.courseTitle}</p>
                                    </div>
                                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Actif</span>
                                </li>
                            ))
                        ) : (
                            <li className="px-6 py-8 text-center text-gray-500 text-sm">
                                Aucun étudiant inscrit pour le moment.
                            </li>
                        )}
                    </ul>
                </div>

                {/* Quick Actions */}
                <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6 h-fit">
                    <h3 className="text-lg leading-6 font-bold text-gray-900 mb-6">Actions Rapides</h3>
                    <div className="space-y-4">
                        <Button href="/dashboard/instructor/courses/new" variant="primary" fullWidth>
                            Créer un nouveau cours
                        </Button>
                        <Button href="#" variant="outline" fullWidth>
                            Envoyer une annonce
                        </Button>
                        <Button href="#" variant="ghost" fullWidth>
                            Gérer les étudiants
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
