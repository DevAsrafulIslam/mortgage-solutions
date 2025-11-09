import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 mt-14 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-2 sm:p-8 md:p-12">
                <header className="mb-8 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-slate-800 ">
                        Terms of Service
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base">Last updated: October 26, 2023</p>
                </header>

                <div className="space-y-4 sm:space-y-10">
                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800 ">1. Agreement to Terms</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800 ">2. Use of the Website</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            You may use the website only for lawful purposes and in accordance with these Terms. You agree not to use the website in any way that violates any applicable federal, state, local, or international law or regulation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800">3. Intellectual Property</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            The website and its entire contents, features, and functionality—including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof—are owned by Freedom Mortgage Solutions, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800">4. Disclaimer of Warranties</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            The website is provided on an as is and as available basis. Freedom Mortgage Solutions makes no representations or warranties of any kind, express or implied, as to the operation of the website, or the information, content, or materials included on the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800">5. Limitation of Liability</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            In no event shall Freedom Mortgage Solutions, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, including without limitation any direct, indirect, special, incidental, consequential, or punitive damages, arising out of or in connection with your use of—or inability to use—the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800">6. Governing Law</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            These Terms of Service and any dispute arising out of or related to them or the website shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-slate-800 ">7. Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            If you have any questions about these Terms of Service, please contact us at{' '}
                            <a href="mailto:info@myfreedomloan.com" className="text-blue-600 hover:text-blue-500 underline">
                                info@myfreedomloan.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;