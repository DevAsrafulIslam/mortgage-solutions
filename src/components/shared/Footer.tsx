import Image from 'next/image'
import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-500 to-slate-600 text-white py-8 sm:py-12">
            <div className="container mx-auto px-4">
                {/* Company Logo in Header */}


                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Contact Us</h3>
                        <div className='flex flex-col sm:flex-row sm:flex-cols-2 md:flex-col gap-4'>

                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-emerald-400 text-sm sm:text-base" />
                                <p className="text-sm sm:text-base">(248) 579-5499</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-emerald-400 mt-1 text-sm sm:text-base" />
                                <div>
                                    <p className="text-sm sm:text-base">3530 Pontiac Lake Road</p>
                                    <p className="text-sm sm:text-base">Waterford, Michigan 48328</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-emerald-400 text-sm sm:text-base" />
                                <p className="text-sm sm:text-base break-all">info@myfreedomloan.com</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-emerald-400 mt-1 text-sm sm:text-base" />
                                <div>
                                    <p className="text-sm sm:text-base">Mon–Thu: 9 AM – 6 PM</p>
                                    <p className="text-sm sm:text-base">Fri: 9 AM – 4 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Loan Options</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>Conventional Loans</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>FHA Loans</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>VA Loans</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>Jumbo Loans</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Resources</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>Mortgage Calculators</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>First-Time Homebuyer Guide</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>Refinancing Guide</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                                    <span>→</span>
                                    <span>Mortgage Glossary</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Connect With Us</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Follow us on social media for mortgage tips, market updates, and company news.</p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                                <FaFacebook className="text-white text-sm sm:text-base" />
                            </a>
                            <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                                <FaTwitter className="text-white text-sm sm:text-base" />
                            </a>
                            <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                                <FaLinkedin className="text-white text-sm sm:text-base" />
                            </a>
                            <a href="#" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                                <FaInstagram className="text-white text-sm sm:text-base" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 sm:mt-6 pt-6 sm:pt-8 text-center text-white">
                    {/* Company Logo in Footer */}
                    <div className="flex justify-center items-center mb-4">
                        <img src="/logo.png" alt="Freedom Mortgage Solutions LLC" className="h-20 mr-2" width="60" height="60" />
                    </div>
                    <p className="text-xs sm:text-sm mb-4">We do not discriminate on the basis of race, color, religion, national origin, sex, handicap, or familial status.</p>
                    <p className="text-sm sm:text-base">© 2025 Freedom Mortgage Solutions LLC. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
                        <a href="/privacy" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Privacy Policy</a>
                        <a href="/terms" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Terms of Service</a>
                        <a href="/licensing" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Licensing & State Disclosures</a>
                        <a href="/accessibility" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Accessibility</a>
                        <a href="/sitemap" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Sitemap</a>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm">NMLS #275999</p>
                    <a href="https://www.nmlsconsumeraccess.org/" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">www.nmlsconsumeraccess.org</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer