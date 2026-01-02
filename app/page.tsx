import Image from "next/image";
import Link from "next/link";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in-up">
              La plateforme n°1 pour les maths
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
              Maîtrisez les <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Mathématiques</span> <br className="hidden md:block" />sans stress.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Des cours interactifs, des exercices corrigés et un suivi personnalisé pour exceller en mathématiques, du lycée aux études supérieures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/cours" size="lg" variant="primary">
                Voir les cours
              </Button>
              <Button href="#a-propos" size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-gray-50" id="cours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">Nos Programmes</h2>
            <p className="mt-2 text-4xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Des parcours adaptés à votre niveau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Course Card 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wider shadow-sm">
                    Lycée
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Préparation Bac Mathématiques</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  Tout le programme de Terminale pour décrocher la mention. Analyse, probabilités, géométrie dans l'espace.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium uppercase">À partir de</span>
                    <span className="text-3xl font-extrabold text-gray-900">49€<span className="text-base font-normal text-gray-500">/mois</span></span>
                  </div>
                  <Button href="/cours" variant="ghost" size="sm" className="group">
                    Découvrir <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-purple-700 uppercase tracking-wider shadow-sm">
                    Supérieur
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Algèbre Linéaire Avancée</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  Espaces vectoriels, matrices, diagonalisation. Idéal pour les étudiants en prépa et licence.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium uppercase">À partir de</span>
                    <span className="text-3xl font-extrabold text-gray-900">59€<span className="text-base font-normal text-gray-500">/mois</span></span>
                  </div>
                  <Button href="/cours" variant="ghost" size="sm" className="group">
                    Découvrir <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100">
              <div className="h-56 bg-gradient-to-br from-teal-500 to-emerald-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider shadow-sm">
                    Collège
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remise à niveau 3ème</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  Reprenez les bases solides avant le lycée. Fractions, équations, théorème de Thalès et Pythagore.
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium uppercase">À partir de</span>
                    <span className="text-3xl font-extrabold text-gray-900">29€<span className="text-base font-normal text-gray-500">/mois</span></span>
                  </div>
                  <Button href="/cours" variant="ghost" size="sm" className="group">
                    Découvrir <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button href="/cours" variant="secondary" size="lg">
              Voir tous nos cours
            </Button>
          </div>
        </div>
      </section>

      {/* Detail / Value Prop Section */}
      <section className="py-24 bg-white" id="a-propos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Pourquoi nous choisir ?</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Une approche pédagogique unique centrée sur la réussite de l'étudiant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-sm">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pédagogie Éprouvée</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos méthodes sont basées sur les dernières recherches en sciences cognitives pour optimiser la mémorisation et la compréhension.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-sm">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suivi Personnalisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque élève progresse à son rythme avec des parcours adaptés à ses lacunes et ses points forts.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-sm">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibilité 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Révisez où vous voulez, quand vous voulez, sur ordinateur, tablette ou mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

