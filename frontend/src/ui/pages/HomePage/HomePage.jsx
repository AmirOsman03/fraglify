import React from 'react';
import HeroSection from '../../components/HomePage/HeroSection/HeroSection';
import FeaturedProducts from '../../components/HomePage/FeaturedProducts/FeaturedProducts';
import CategoriesSection from '../../components/HomePage/CategoriesSection/CategoriesSection';
import Testimonials from '../../components/HomePage/Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="w-full">
                <HeroSection/>
                <FeaturedProducts/>
                <CategoriesSection/>
                <Testimonials/>
            </div>
        </div>
    );
};

export default HomePage;