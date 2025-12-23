import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">Crack the Maths</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Accueil</Link>
                        <Link href="/cours" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Nos Cours</Link>
                        <Link href="/forum" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Forum</Link>
                        <Link href="/a-propos" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">À propos</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-gray-900 font-medium px-3 py-2">Connexion</button>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
