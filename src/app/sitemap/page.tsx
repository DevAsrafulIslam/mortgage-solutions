import Link from 'next/link';
import React from 'react';

const Sitemap = () => {
    return (
        <div className="min-h-screen mt-22 bg-white">
            {/* Hero Section */}
            <section className=" bg-gradient-to-r from-slate-500 to-slate-600 text-white text-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
                    <p className="text-lg md:text-xl opacity-90">Navigate through all available pages</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Pages */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-[#002D62] mb-4 border-b border-gray-200 pb-3">
                                Main Pages
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loan-options" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Loan Options
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Pages */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-[#002D62] mb-4 border-b border-gray-200 pb-3">
                                Legal Pages
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/privacy" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/licensing" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Licensing & State Disclosures
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/accessibility" className="text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Accessibility Statement
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Application */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-[#002D62] mb-4 border-b border-gray-200 pb-3">
                                Application
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/application-modal" className="inline-flex items-center text-gray-700 hover:text-[#00529B] transition-colors duration-200">
                                        Apply Now
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Sitemap;