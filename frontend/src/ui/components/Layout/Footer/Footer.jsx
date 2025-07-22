import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-indigo-900">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-2">
                            {/* Perfume bottle icon */}
                            <svg
                                className="w-8 h-8 text-purple-700"
                                fill="none"
                                viewBox="0 0 32 32"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <rect x="10" y="12" width="12" height="14" rx="4" fill="currentColor"
                                      className="text-purple-200"/>
                                <rect x="13" y="6" width="6" height="6" rx="2" fill="currentColor"
                                      className="text-purple-400"/>
                                <rect x="14" y="2" width="4" height="4" rx="1" fill="currentColor"
                                      className="text-purple-700"/>
                                <circle cx="16" cy="19" r="3" fill="white" opacity="0.5"/>
                            </svg>
                            <span
                                className="text-2xl font-extrabold text-gray-200 tracking-tight select-none">fraglify</span>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-200">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                            molestias.
                        </p>

                        <ul className="mt-8 flex gap-6 text-white">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Facebook</span>
                                </a>

                                <FaFacebook className={"text-2xl"}/>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Instagram</span>
                                </a>

                                <FaInstagram className={"text-2xl"}/>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <FaTwitter className={"text-2xl"}/>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/AmirOsman03"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <FaGithub className={"text-2xl"}/>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Dribbble</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-300">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        1on1 Coaching
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Company Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Accounts Review
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        HR Consulting
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-300">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Accounts Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-300">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-300">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Accessibility
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Returns Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Refund Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Hiring-3 Statistics
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;