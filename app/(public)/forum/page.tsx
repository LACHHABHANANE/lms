import Link from "next/link";

export default function Forum() {
    const topics = [
        {
            id: 1,
            title: "Besoin d'aide sur les intégrales doubles",
            author: "MathWizard",
            replies: 12,
            views: 340,
            category: "Supérieur",
            tagColor: "bg-purple-100 text-purple-800",
            time: "il y a 2h"
        },
        {
            id: 2,
            title: "Comment démontrer le théorème de Pythagore ?",
            author: "Student99",
            replies: 5,
            views: 120,
            category: "Collège",
            tagColor: "bg-teal-100 text-teal-800",
            time: "il y a 5h"
        },
        {
            id: 3,
            title: "Probabilité conditionnelle : exercice type BAC",
            author: "BacPro",
            replies: 23,
            views: 890,
            category: "Lycée",
            tagColor: "bg-indigo-100 text-indigo-800",
            time: "il y a 1j"
        },
        {
            id: 4,
            title: "Matrices inversibles et déterminant",
            author: "Linea",
            replies: 2,
            views: 45,
            category: "Supérieur",
            tagColor: "bg-purple-100 text-purple-800",
            time: "il y a 2j"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Forum d'entraide</h1>
                        <p className="text-gray-600 mt-1">Posez vos questions et échangez avec la communauté.</p>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        Nouveau sujet
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                        <h2 className="font-semibold text-gray-700">Discussions récentes</h2>
                        <div className="flex gap-2">
                            <select className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white p-1">
                                <option>Tout voir</option>
                                <option>Collège</option>
                                <option>Lycée</option>
                                <option>Supérieur</option>
                            </select>
                        </div>
                    </div>

                    <ul className="divide-y divide-gray-100">
                        {topics.map((topic) => (
                            <li key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0 pr-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${topic.tagColor}`}>
                                                {topic.category}
                                            </span>
                                            <span className="text-sm text-gray-500 flex items-center">
                                                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                                par {topic.author}
                                            </span>
                                            <span className="text-sm text-gray-400">• {topic.time}</span>
                                        </div>
                                        <Link href="#" className="block">
                                            <h3 className="text-lg font-bold text-gray-900 truncate hover:text-indigo-600 transition-colors">
                                                {topic.title}
                                            </h3>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                            {topic.replies}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                            {topic.views}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
