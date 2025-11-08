import React from 'react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-2">Accessibility Statement</h1>
          <p className="text-slate-500 text-sm">Last updated: 10/26/2024</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="bg-white rounded-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment</h2>
            <p className="text-slate-700 leading-relaxed">
              Freedom Mortgage Solutions LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Conformance Status</h2>
            <p className="text-slate-700 leading-relaxed">
              We are working to make our website conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-slate-200 p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Feedback</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="text-slate-700">info@myfreedomloan.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-slate-700">(248) 579-5499</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-slate-200 p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Technical Specifications</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <div className="flex flex-wrap gap-4">
              {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* New section added */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Additional Resources</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              For further assistance or to request alternative formats of any content, please reach out to us. We are here to help and ensure you have full access to the information and services you need.
            </p>
            <div className="flex flex-wrap gap-4">
              {['PDF Reader', 'Screen Reader', 'Keyboard Navigation'].map((resource) => (
                <div key={resource} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{resource}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;