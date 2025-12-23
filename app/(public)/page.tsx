import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Maîtrisez les <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Mathématiques</span> sans stress.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Des cours interactifs, des exercices corrigés et un suivi personnalisé pour exceller en mathématiques, du lycée aux études supérieures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cours" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:bg-indigo-700 transition-all hover:scale-105">
                Voir les cours
              </Link>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-bold text-lg hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50" id="cours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">Nos Programmes</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Des parcours adaptés à votre niveau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Course Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-indigo-600 uppercase">
                  Lycée
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Préparation Bac Mathématiques</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Tout le programme de Terminale pour décrocher la mention. Analyse, probabilités, géométrie dans l'espace.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gray-900">49€<span className="text-sm font-normal text-gray-500">/mois</span></span>
                  <Link href="/cours" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1">
                    Découvrir &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 relative">
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-purple-600 uppercase">
                  Supérieur
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Algèbre Linéaire Avancée</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Espaces vectoriels, matrices, diagonalisation. Idéal pour les étudiants en prépa et licence.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gray-900">59€<span className="text-sm font-normal text-gray-500">/mois</span></span>
                  <Link href="/cours" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1">
                    Découvrir &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-green-500 relative">
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-teal-600 uppercase">
                  Collège
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Remise à niveau 3ème</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  Reprenez les bases solides avant le lycée. Fractions, équations, théorème de Thalès et Pythagore.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gray-900">29€<span className="text-sm font-normal text-gray-500">/mois</span></span>
                  <Link href="/cours" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1">
                    Découvrir &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/cours" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:text-lg transition-colors">
              Voir tous nos cours
            </Link>
          </div>
        </div>
      </section>

      {/* Detail / Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pédagogie Éprouvée</h3>
              <p className="text-gray-600">
                Nos méthodes sont basées sur les dernières recherches en sciences cognitives pour optimiser la mémorisation et la compréhension.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suivi Personnalisé</h3>
              <p className="text-gray-600">
                Chaque élève progresse à son rythme avec des parcours adaptés à ses lacunes et ses points forts.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibilité 24/7</h3>
              <p className="text-gray-600">
                Révisez où vous voulez, quand vous voulez, sur ordinateur, tablette ou mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
