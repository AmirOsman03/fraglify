import React from 'react';
import { Link } from 'react-router';

const pages = [
    { path: '/', name: 'Home' },
    { path: '/perfumes', name: 'Perfumes' },
];

const Navbar = () => {
    return (
        <nav className="my-6 mx-auto w-full max-w-5xl rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-between px-6 py-3 min-h-[64px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
                {/* Perfume bottle icon */}
                <svg
                    className="w-8 h-8 text-purple-700"
                    fill="none"
                    viewBox="0 0 32 32"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <rect x="10" y="12" width="12" height="14" rx="4" fill="currentColor" className="text-purple-200"/>
                    <rect x="13" y="6" width="6" height="6" rx="2" fill="currentColor" className="text-purple-400"/>
                    <rect x="14" y="2" width="4" height="4" rx="1" fill="currentColor" className="text-purple-700"/>
                    <circle cx="16" cy="19" r="3" fill="white" opacity="0.5"/>
                </svg>
                <span className="text-2xl font-extrabold text-purple-700 tracking-tight select-none">fraglify</span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
                {pages.map((page) => (
                    <Link
                        key={page.path}
                        to={page.path}
                        className="text-gray-700 hover:text-purple-700 font-medium px-3 py-2 rounded-lg transition-colors duration-150"
                    >
                        {page.name}
                    </Link>
                ))}
            </div>

            {/* Search Bar */}
            <form className="relative w-48 sm:w-64">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
                />
            </form>
        </nav>
    );
};

export default Navbar;