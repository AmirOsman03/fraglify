import React from 'react';
import {Link} from 'react-router';

const pages = [
    {path: '/', name: 'Home'},
    {path: '/perfumes', name: 'Perfumes'},
];

const Navbar = () => {
    return (
        <nav
            className="sticky top-0 my-6 mx-auto w-full max-w-5xl rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-between px-6 py-3 min-h-[64px]">
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
            <span className={"text-red-600 cursor-pointer"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                </svg>
            </span>
        </nav>
    );
};

export default Navbar;