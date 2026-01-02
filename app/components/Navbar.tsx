import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform duration-300">
                                <span className="text-white font-extrabold text-xl">M</span>
                            </div>
                            <span className="font-bold text-2xl text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">Crack the Maths</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-1 items-center bg-gray-50 px-2 py-1.5 rounded-full border border-gray-100">
                        <NavLink href="/">Accueil</NavLink>
                        <NavLink href="/cours">Nos Cours</NavLink>
                        <NavLink href="/forum">Forum</NavLink>
                        <NavLink href="/a-propos">À propos</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button href="/auth?mode=login" variant="ghost" size="sm">
                            Connexion
                        </Button>
                        <Button href="/auth?mode=register" variant="primary" size="sm">
                            S'inscrire
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="px-5 py-2 text-sm font-medium text-gray-600 rounded-full hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all duration-200 relative group">
            {children}
        </Link>
    );
}
