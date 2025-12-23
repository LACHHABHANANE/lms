import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold tracking-tight mb-4 block">Crack the Maths</span>
                        <p className="text-gray-400 text-sm">
                            Rendre les mathématiques claires, intuitives et accessibles à tous.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-indigo-400">Liens Rapides</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/cours" className="hover:text-white transition-colors">Tous les cours</Link></li>
                            <li><Link href="/forum" className="hover:text-white transition-colors">Forum</Link></li>
                            <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-indigo-400">Support</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-indigo-400">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Recevez nos astuces mathématiques chaque semaine.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Votre email" className="bg-gray-800 text-white rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded font-medium">OK</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Crack the Maths. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
