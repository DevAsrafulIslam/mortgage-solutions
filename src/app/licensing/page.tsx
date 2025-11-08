import React from 'react';
const Licensing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10 border border-gray-200">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Licensing & State Disclosures
                    </h1>
                    <p className="text-gray-600 text-sm">Last updated: 10/26/2023</p>
                </div>
                <div className="space-y-8">
                    <section className="border-l-4 border-blue-500 pl-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Michigan Licensing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Licensed by the Michigan Department of Insurance and Financial Services (Mortgage Broker License #XXXX).
                        </p>
                    </section>
                    <section className="border-l-4 border-green-500 pl-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Licensed States</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We are currently licensed in the following states:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center w-5 h-5 mr-3 text-green-700 bg-green-100 rounded-full">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-gray-700 text-lg">Colorado (CO)</span>
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-indigo-500 pl-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">NMLS Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Freedom Mortgage Solutions LLC is a licensed mortgage broker. NMLS #275999.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            For more information, please visit the Nationwide Multistate Licensing System & Registry (NMLS) website at{' '}
                            <a
                                href="http://www.nmlsconsumeraccess.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-500 underline font-medium"
                            >
                                www.nmlsconsumeraccess.org
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Licensing;