import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const effectiveDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto p-12">
                <header className="mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Privacy Policy</h1>
                    <p className="text-sm text-slate-500">Effective Date: {effectiveDate}</p>
                </header>

                <div className="prose prose-slate max-w-none space-y-10 text-slate-800">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Freedom Mortgage Solutions LLC (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you provide. This Privacy Policy describes the types of information we collect, how we use and safeguard it, and the choices available to you regarding our use of that information. We comply with the California Consumer Privacy Act (CCPA) and the Gramm-Leach-Bliley Act (GLBA) where applicable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
                        <p className="leading-relaxed mb-3">
                            We collect the following categories of personal information:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Identifiers: name, email address, telephone number, postal address, IP address, device identifiers.</li>
                            <li>Financial Information: credit score, income, employment details, loan application data, bank account numbers.</li>
                            <li>Characteristics of protected classifications: age, marital status, military status (as voluntarily provided).</li>
                            <li>Commercial Information: records of products or services purchased or considered.</li>
                            <li>Internet Activity: browsing history, search history, interaction with our website or advertisements.</li>
                            <li>Geolocation Data: precise location if you enable location services.</li>
                            <li>Professional or Employment Information: employer, job title, work history.</li>
                            <li>Inferences drawn from any of the above to create a profile reflecting preferences or behavior.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
                        <p className="leading-relaxed mb-3">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>To process and evaluate mortgage applications and related services.</li>
                            <li>To respond to your questions and fulfill your requests.</li>
                            <li>To provide you with marketing or promotional communications (subject to your preferences).</li>
                            <li>To improve our website, products, and services.</li>
                            <li>To detect security incidents, protect against malicious activity, and maintain user safety.</li>
                            <li>To comply with legal and regulatory obligations, including GLBA privacy requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Information We Share</h2>
                        <p className="leading-relaxed mb-3">
                            We may share your personal information with:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Service providers who perform services on our behalf (e.g., credit bureaus, appraisers, title companies).</li>
                            <li>Affiliated companies for everyday business purposes, marketing (with your consent), or joint marketing arrangements.</li>
                            <li>Government entities as required by law or to protect our legal rights.</li>
                            <li>Third parties in connection with a business transaction such as a merger or acquisition.</li>
                        </ul>
                        <p className="leading-relaxed">
                            We do not sell personal information of California residents without providing the right to opt out.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data Protection & Security</h2>
                        <p className="leading-relaxed">
                            We maintain administrative, technical, and physical safeguards designed to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Your Rights and Choices</h2>
                        <p className="leading-relaxed mb-3">
                            Depending on your state of residence, you may have the following rights:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Access: request disclosure of personal information we collect, use, disclose, or sell.</li>
                            <li>Deletion: request deletion of personal information subject to certain exceptions.</li>
                            <li>Correction: request correction of inaccurate personal information.</li>
                            <li>Opt-Out: opt out of the sale or sharing of personal information or targeted advertising.</li>
                            <li>Limit Sensitive Information Use: limit use of sensitive personal information to permitted purposes.</li>
                            <li>Marketing Communications: opt out of receiving marketing emails by clicking “unsubscribe” or contacting us.</li>
                        </ul>
                        <p className="leading-relaxed mt-3">
                            California residents may exercise these rights without discrimination. To submit a request, contact us using the details below or click “Do Not Sell or Share My Personal Information” at the footer of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">7. California Consumer Privacy Act (CCPA) Notice</h2>
                        <p className="leading-relaxed">
                            This notice supplements our Privacy Policy and applies solely to California residents. Over the preceding 12 months we have collected the categories of personal information listed in Section 2. We collect and use this information for the business purposes described in Section 3. We do not sell personal information as defined by the CCPA. California residents have the right to submit verifiable consumer requests as described in Section 6.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Gramm-Leach-Bliley Act (GLBA) Privacy Notice</h2>
                        <p className="leading-relaxed">
                            Federal law requires us to tell you how we collect, share, and protect your personal financial information. We collect personal information described above when you apply for a loan or use our services. We share this information only as permitted by law (e.g., to process transactions, maintain your account, or respond to court orders). You cannot opt out of these necessary sharing arrangements. We restrict access to your personal information to employees who need it to provide products or services to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Do Not Sell or Share My Personal Information</h2>
                        <p className="leading-relaxed">
                            California residents may opt out of the sale or sharing of their personal information by clicking the “Do Not Sell or Share My Personal Information” link in the footer of our website or by submitting a request to the contact details below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Contact</h2>
                        <p className="leading-relaxed">
                            If you have questions or concerns regarding this Privacy Policy or wish to exercise your privacy rights, please contact us at{' '}
                            <a
                                href="mailto:info@myfreedomloan.com"
                                className="text-blue-700 underline hover:text-blue-900 transition-colors"
                            >
                                info@myfreedomloan.com
                            </a>{' '}
                            or call us toll-free at{' '}
                            <a
                                href="tel:+1-800-555-1234"
                                className="text-blue-700 underline hover:text-blue-900 transition-colors"
                            >
                                1-800-555-1234
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;