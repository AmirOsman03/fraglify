import React, { useState } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Fragrance Enthusiast",
            image: "👩‍🦰",
            rating: 5,
            text: "I've been searching for the perfect floral fragrance for years, and Fraglify helped me discover 'Midnight Rose'. The quality is exceptional and the scent lasts all day. Highly recommend!",
            product: "Midnight Rose"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Business Professional",
            image: "👨‍💼",
            rating: 5,
            text: "The customer service is outstanding and the fragrance recommendations are spot-on. I love how they take the time to understand your preferences. 'Ocean Breeze' is now my signature scent.",
            product: "Ocean Breeze"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            role: "Fashion Blogger",
            image: "👩‍🎨",
            rating: 5,
            text: "As someone who reviews fragrances professionally, I can say Fraglify's collection is top-tier. The 'Vanilla Dreams' is absolutely divine and perfect for evening wear.",
            product: "Vanilla Dreams"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "Art Director",
            image: "👨‍🎨",
            rating: 5,
            text: "The packaging is as beautiful as the fragrances themselves. 'Mystic Woods' has become my go-to for special occasions. The attention to detail is remarkable.",
            product: "Mystic Woods"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what fragrance enthusiasts are saying about their experience with Fraglify.
                    </p>
                </div>

                <div className="relative">
                    {/* Testimonial Card */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-xl">
                        <div className="text-center">
                            {/* Customer Info */}
                            <div className="mb-6">
                                <div className="text-6xl mb-4">
                                    {testimonials[currentIndex].image}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {testimonials[currentIndex].role}
                                </p>
                                <div className="flex justify-center mb-3">
                                    {renderStars(testimonials[currentIndex].rating)}
                                </div>
                                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                                    {testimonials[currentIndex].product}
                                </span>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-lg sm:text-xl text-gray-700 italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </blockquote>

                            {/* Navigation Dots */}
                            <div className="flex justify-center space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            index === currentIndex 
                                                ? 'bg-purple-600' 
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                        <div className="text-gray-600">Fragrances Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 