import React from 'react';

const HeroSection = () => {
    return (
        <section
            className="flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 px-2 sm:px-3 lg:px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Discover Your Perfect{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Fragrance
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                        Explore our curated collection of luxury perfumes and find the scent that tells your unique
                        story.
                        From classic elegance to modern sophistication.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline-none">
                            Shop Now
                        </button>
                        <button
                            className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline-none">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image/Visual */}
                <div className="relative">
                    <div className="w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl flex items-center justify-center">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/woman-choose-fashion-perfume-on-shopping-in-beauty-cosmetics-perfumery-shop-illustration-download-svg-png-gif-file-formats--selection-fragrance-store-natural-and-skincare-pack-e-commerce-illustrations-11561940.png?f=webp"
                            alt="Luxury Perfume Collection" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 