import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BlogPreviewSection from './BlogPreviewSection';

const carouselItems = [
    { id: 1, image: "/image/travel1.jpg" },
    { id: 2, image: "/image/travel2.jpg" },
    { id: 3, image: "/image/travel3.webp" },
];

function Header() {
    const [searchData, setSearchData] = useState({
        destination: '',
        departureDate: '',
        travelers: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de recherche à implémenter
        console.log('Recherche envoyée:', searchData);
        // Redirection vers la page des résultats
        // navigate('/search', { state: { searchData } });
    };

    return (
        <>
            <header>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    className="mt-5 sm:mt-0"
                >
                    {carouselItems.map((item) => (
                        <div
                            key={item.id}
                            className="h-screen flex items-center justify-center bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-emerald-800/70" />

                            <div className="container mx-auto px-4 text-white text-center relative z-10">
                                <h2 className="font-bold text-3xl">Bienvenue sur</h2>
                                <h1 className="text-4xl md:text-6xl font-bold capitalize mb-6">Travel Planner</h1>

                                {/* Formulaire de recherche */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-8 w-full bg-transparent"
                                >
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="destination" className="block text-white text-left mb-1 font-medium">
                                                Destination
                                            </label>
                                            <input
                                                type="text"
                                                id="destination"
                                                name="destination"
                                                placeholder="Où souhaitez-vous aller ?"
                                                value={searchData.destination}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-white/50 rounded-lg bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                                required
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label htmlFor="departureDate" className="block text-white text-left mb-1 font-medium">
                                                Date de départ
                                            </label>
                                            <input
                                                type="date"
                                                id="departureDate"
                                                name="departureDate"
                                                value={searchData.departureDate}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-white/50 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                                required
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label htmlFor="travelers" className="block text-white text-left mb-1 font-medium">
                                                Voyageurs
                                            </label>
                                            <input
                                                type="number"
                                                id="travelers"
                                                name="travelers"
                                                min="1"
                                                max="20"
                                                value={searchData.travelers}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-white/50 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                                required
                                            />
                                        </div>

                                        <div className="flex items-end">
                                            <button
                                                type="submit"
                                                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                                            >
                                                Rechercher
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <p className="mt-6 text-sm text-white/80 max-w-2xl mx-auto">
                                    Trouvez les meilleurs itinéraires, hébergements et activités pour votre prochain voyage
                                </p>
                            </div>

                        </div>
                    ))}
                </Carousel>
            </header>
            <BlogPreviewSection />
        </>


    );
}

export default Header;