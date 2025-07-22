import React from 'react';
import {useNavigate} from "react-router";

const FeaturedProducts = () => {
    const featuredProducts = [
        {
            id: 1,
            image: "https://www.synergytaste.com/wp-content/uploads/sites/2/2021/10/Vanilla-3-WP.jpg",
            name: "Vanilla",
            category: "Oriental notes",
        },
        {
            id: 2,
            image: "https://www.learnreligions.com/thmb/b8243JXdomaCb5lYbb5rPsetLt0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/powdered-and-whole-sandalwood-90258078-578cfaba5f9b584d20db4620.jpg",
            name: "Sandalwood",
            category: "Woody notes",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1684472993236-b605bb80ca0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFzbWluZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Jasmine",
            category: "Floral notes",
        },
        {
            id: 4,
            image: "https://oudimentary.com/cdn/shop/articles/oud_wood_full_554x.png?v=1741822704",
            name: "Oud wood",
            category: "Modern & Unique"
        },
        {
            id: 5,
            image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/06/mint-good-GettyImages-2216675819-Header-1024x575.jpg",
            name: "Mint",
            category: "Herbal notes"
        },
        {
            id: 6,
            name: "Pomegranate",
            image: "https://hips.hearstapps.com/hmg-prod/images/766/pomegranates-main-1515525122.jpg?crop=1xw:0.884xh;center,top&resize=1200:*",
            category: "Citrus notes"
        },
        {
            id: 7,
            name: "Black orchid",
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/467/593/small_2x/rare-blooming-large-black-orchid-of-genus-big-lip-phalaenopsis-flowers-isolated-on-dark-black-background-neural-network-generated-art-photo.jpg",
            category: "Floral notes"
        },
        {
            id: 8,
            name: "Lemon",
            image: "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg?cs=srgb&dl=pexels-goumbik-952360.jpg&fm=jpg",
            category: "Citrus notes"
        },
    ];

    const navigate = useNavigate();

    const handleCardClick = (note) => {
        const encodedNote = encodeURIComponent(note);
        navigate(`perfumes/filter-by-note?note=${encodedNote}`);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Most Popular Notes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most popular and highly-rated notes, carefully selected for their unique character and quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => handleCardClick(product.name)}
                        >
                            <div className={""}>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
                            </div>
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                                        {product.category}
                                    </span>
                                </div>
                                
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {product.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline">
                        View all products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts; 