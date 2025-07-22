import React from 'react';

const CategoriesSection = () => {
    const categories = [
        {
            id: 1,
            name: "Floral",
            description: "Romantic and feminine scents",
            icon: "🌸",
            color: "from-pink-400 to-rose-500",
            count: "150+ Products"
        },
        {
            id: 2,
            name: "Oriental",
            description: "Exotic and mysterious fragrances",
            icon: "🌙",
            color: "from-amber-400 to-orange-500",
            count: "120+ Products"
        },
        {
            id: 3,
            name: "Fresh",
            description: "Clean and invigorating scents",
            icon: "🌿",
            color: "from-green-400 to-emerald-500",
            count: "200+ Products"
        },
        {
            id: 4,
            name: "Woody",
            description: "Warm and sophisticated notes",
            icon: "🌲",
            color: "from-brown-400 to-amber-600",
            count: "180+ Products"
        },
        {
            id: 5,
            name: "Citrus",
            description: "Bright and energizing fragrances",
            icon: "🍊",
            color: "from-yellow-400 to-orange-400",
            count: "90+ Products"
        },
        {
            id: 6,
            name: "Aquatic",
            description: "Ocean-inspired fresh scents",
            icon: "🌊",
            color: "from-blue-400 to-cyan-500",
            count: "75+ Products"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Explore by Category
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find your perfect fragrance by exploring our carefully curated categories, each offering unique scent profiles.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="group cursor-pointer">
                            <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <span className="text-sm opacity-80">
                                        {category.count}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-sm opacity-90 mb-4">
                                    {category.description}
                                </p>
                                
                                <div className="flex items-center text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                                    <span>Explore Category</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Can't Decide?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Take our fragrance quiz to discover your perfect scent profile and get personalized recommendations.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline">
                            Take Quiz
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection; 