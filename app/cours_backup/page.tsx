import Link from "next/link";

export default function Cours() {
    const courses = [
        {
            id: 1,
            title: "Préparation Bac Mathématiques",
            level: "Lycée",
            description: "Tout le programme de Terminale pour décrocher la mention. Analyse, probabilités, géométrie dans l'espace.",
            price: "49€",
            color: "from-blue-400 to-indigo-500",
            tagColor: "text-indigo-600"
        },
        {
            id: 2,
            title: "Algèbre Linéaire Avancée",
            level: "Supérieur",
            description: "Espaces vectoriels, matrices, diagonalisation. Idéal pour les étudiants en prépa et licence.",
            price: "59€",
            color: "from-purple-400 to-pink-500",
            tagColor: "text-purple-600"
        },
        {
            id: 3,
            title: "Remise à niveau 3ème",
            level: "Collège",
            description: "Reprenez les bases solides avant le lycée. Fractions, équations, théorème de Thalès et Pythagore.",
            price: "29€",
            color: "from-teal-400 to-green-500",
            tagColor: "text-teal-600"
        },
        {
            id: 4,
            title: "Géométrie Plane",
            level: "Lycée",
            description: "Vecteurs, produits scalaires, trigonométrie. Maîtrisez l'espace 2D.",
            price: "39€",
            color: "from-orange-400 to-red-500",
            tagColor: "text-orange-600"
        },
        {
            id: 5,
            title: "Probabilités et Statistiques",
            level: "Supérieur",
            description: "Lois de probabilité, estimation, tests d'hypothèse. Pour les scientifiques et économistes.",
            price: "59€",
            color: "from-cyan-400 to-blue-500",
            tagColor: "text-cyan-600"
        },
        {
            id: 6,
            title: "Arithmétique et Nombres",
            level: "Collège",
            description: "Nombres premiers, PGCD, PPCM. Les fondements des mathématiques pour tous.",
            price: "25€",
            color: "from-yellow-400 to-orange-500",
            tagColor: "text-yellow-600"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Cours de Mathématiques</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Explorez notre catalogue complet de cours, du collège au niveau supérieur. Trouvez le programme parfait pour atteindre vos objectifs.
                    </p>
                </div>
            </div>

            {/* Filter/Search Section (Visual only for now) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium text-sm whitespace-nowrap">Tous</button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-medium text-sm whitespace-nowrap">Collège</button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-medium text-sm whitespace-nowrap">Lycée</button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-medium text-sm whitespace-nowrap">Supérieur</button>
                    </div>
                    <div className="relative w-full md:w-64">
                        <input type="text" placeholder="Rechercher un cours..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                            <div className={`h-40 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-xl font-bold text-gray-900">{course.price}<span className="text-xs font-normal text-gray-500">/mois</span></span>
                                    <Link href={`/cours/${course.id}`} className="text-indigo-600 font-bold text-sm hover:text-indigo-800 flex items-center gap-1">
                                        Voir le détail &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 disabled:opacity-50">Précédent</button>
                        <button className="px-3 py-1 bg-indigo-600 text-white border border-indigo-600 rounded-md">1</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                        <span className="px-2 text-gray-500">...</span>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">Suivant</button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
