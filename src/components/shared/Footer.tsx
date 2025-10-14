import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Contact Us</h3>
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-emerald-400 text-sm sm:text-base" />
                            <p className="text-sm sm:text-base">(555) 123-4567</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="text-emerald-400 mt-1 text-sm sm:text-base" />
                            <div>
                                <p className="text-sm sm:text-base">123 Mortgage Lane, Suite 100</p>
                                <p className="text-sm sm:text-base">Hometown, ST 12345</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-emerald-400 text-sm sm:text-base" />
                            <p className="text-sm sm:text-base break-all">info@mortgagepro.com</p>
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

                <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-sm sm:text-base">© {new Date().getFullYear()} MortgagePro. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
                        <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Terms of Service</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors text-sm sm:text-base">Licensing Information</a>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm">NMLS #123456</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer