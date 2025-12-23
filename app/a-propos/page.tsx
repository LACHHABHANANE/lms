import Image from "next/image";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">À propos de nous</h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Notre mission est de démocratiser l'excellence mathématique et de redonner confiance à chaque étudiant, quel que soit son niveau.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Pourquoi Crack the Maths ?
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Les mathématiques sont souvent perçues comme une matière élitiste et difficile. Nous croyons le contraire : avec la bonne méthode et des explications claires, tout le monde peut réussir.
                            </p>

                            <dl className="mt-10 space-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Innovation Pédagogique</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Nous utilisons des outils visuels et interactifs pour rendre les concepts abstraits concrets et compréhensibles.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Communauté Bienveillante</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Apprendre ensemble, c'est mieux. Notre forum permet l'entraide et le partage de connaissances.
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Image d'équipe / Classe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-indigo-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            La réussite en chiffres
                        </h2>
                    </div>
                    <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                                Étudiants accompagnés
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">
                                5000+
                            </dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                                Heures de cours
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">
                                12k+
                            </dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                                Taux de réussite
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">
                                98%
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
