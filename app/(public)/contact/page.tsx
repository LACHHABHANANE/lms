export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-indigo-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">Contactez-nous</h1>
                    <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                        Une question sur nos cours ? Besoin d'aide pour votre inscription ? Notre équipe est là pour vous répondre.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Contact Info */}
                    <div className="bg-indigo-50 p-10 md:w-1/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-indigo-900 mb-6">Informations</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Adresse</h4>
                                        <p className="text-gray-600 text-sm">123 Avenue des Sciences,<br />75000 Paris, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email</h4>
                                        <p className="text-gray-600 text-sm">contact@crackthemaths.fr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-lg text-indigo-600 shadow-sm">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Téléphone</h4>
                                        <p className="text-gray-600 text-sm">+33 1 23 45 67 89</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="font-bold text-gray-900 mb-2">Suivez-nous</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm">
                                    <span className="font-bold">fb</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm">
                                    <span className="font-bold">tw</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm">
                                    <span className="font-bold">in</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                    <input type="text" id="firstname" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Votre prénom" />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                    <input type="text" id="lastname" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Votre nom" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="vous@exemple.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white">
                                    <option>Renseignement général</option>
                                    <option>Inscription</option>
                                    <option>Support technique</option>
                                    <option>Partenariat</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg transform hover:-translate-y-0.5">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
