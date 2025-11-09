"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import ApplicationModal from '@/app/application-modal/page';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsMenuOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 w-full shadow-md bg-white z-50">
                <nav className="container mx-auto py-3 px-4 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <img
                                    src="/logo.png"
                                    alt="Freedom Mortgage Solutions LLC Logo"
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 sm:h-16 sm:w-16"
                                />
                                <span className="text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent whitespace-nowrap">
                                    Freedom Mortgage Solutions LLC
                                </span>
                            </Link>
                        </div>

                        {/* mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        {/* desktop menu */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
                                Home
                            </Link>
                            <Link href="/loan-options" className="text-gray-700 hover:text-emerald-600 transition-colors">
                                Loan Options
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                                About Us
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
                                Contact
                            </Link>
                        </div>

                        {/* color switch and login button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={openModal}
                                className="bg-emerald-600 text-white px-4 py-2 sm:px-6 rounded-full hover:bg-emerald-700 transition-colors text-sm sm:text-base"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* mobile menu */}
                    {isMenuOpen && (
                        <>
                            {/* overlay */}
                            <div
                                className="fixed inset-0 z-40 md:hidden"
                                onClick={toggleMenu}
                            />
                            <div className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden">
                                <div className="flex justify-end p-4">
                                    <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col space-y-4 p-4">
                                    <button onClick={() => handleNavigation('/')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">
                                        Home
                                    </button>
                                    <button onClick={() => handleNavigation('/loan-options')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">
                                        Loan Options
                                    </button>
                                    <button onClick={() => handleNavigation('/about')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">
                                        About Us
                                    </button>
                                    <button onClick={() => handleNavigation('/contact')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">
                                        Contact
                                    </button>
                                    <button
                                        onClick={openModal}
                                        className="w-full bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </nav>
            </header>

            {/* Application Modal */}
            <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Navbar;