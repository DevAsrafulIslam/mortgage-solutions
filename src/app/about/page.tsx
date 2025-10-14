export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
            <div className="container mx-auto px-4 py-8 sm:py-16">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-sm mt-12 sm:mt-12 uppercase tracking-widest text-emerald-600 mb-2">
                        About Us
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        PREMIER MORTGAGE SOLUTIONS
                    </h1>
                    <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-cyan-500 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Premier Mortgage Solutions is a trusted mortgage brokerage firm with over 15 years of experience in the industry. We have helped thousands of families achieve their homeownership dreams through personalized mortgage solutions. Our team of licensed mortgage professionals is dedicated to finding the best rates and terms for your unique financial situation. Whether you are a first-time homebuyer or looking to refinance, our expertise ensures a smooth and efficient mortgage process.
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-2">•</span>
                                To provide transparent and honest mortgage advice tailored to each clients financial goals
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-2">•</span>
                                To simplify the mortgage process through clear communication and expert guidance
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-2">•</span>
                                To secure competitive rates and favorable terms through our extensive lender network
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-2">•</span>
                                To build lasting relationships with clients through exceptional service and ongoing support
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-t-4 border-emerald-500 mb-12 sm:mb-16 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Mortgage Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                title: "Conventional Mortgages",
                                description: "Traditional home loans with competitive rates and flexible terms"
                            },
                            {
                                title: "FHA Loans",
                                description: "Government-backed loans with lower down payment requirements"
                            },
                            {
                                title: "VA Loans",
                                description: "Special mortgage options for veterans and active military"
                            },
                            {
                                title: "Jumbo Loans",
                                description: "Financing for high-value properties exceeding conforming loan limits"
                            },
                            {
                                title: "Refinancing",
                                description: "Lower your rate or tap into home equity with refinance options"
                            },
                            {
                                title: "Home Equity Loans",
                                description: "Access your home's equity for renovations or major expenses"
                            }
                        ].map((service, index) => (
                            <div key={index} className="p-4 border rounded-md hover:bg-emerald-50 transition-colors">
                                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-t-4 border-cyan-500 mb-12 sm:mb-16 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Personalized Service",
                                description: "Customized mortgage solutions based on your unique financial situation"
                            },
                            {
                                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                                title: "Extensive Lender Network",
                                description: "Access to numerous lenders for competitive rates and flexible options"
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "Fast Pre-Approvals",
                                description: "Quick pre-approval process to strengthen your home buying position"
                            },
                            {
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Streamlined Process",
                                description: "Efficient application and approval process with minimal paperwork"
                            },
                            {
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                title: "Dedicated Support",
                                description: "Ongoing assistance throughout the entire mortgage process"
                            },
                            {
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                title: "Transparent Process",
                                description: "Clear communication about rates, fees, and terms with no hidden costs"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-4 text-center">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rest of the components follow similar responsive patterns */}
                {/* Mortgage Rates, Team, Partners, and Contact sections would follow the same responsive approach */}
                {/* Using grid-cols-1 for mobile, then expanding to multiple columns for larger screens */}
                {/* Adjusting text sizes, padding, and spacing for different screen sizes */}
                {/* Using smaller icons and images on mobile */}
                {/* Ensuring touch targets are at least 44px x 44px for mobile users */}
            </div>
        </div>
    );
}
