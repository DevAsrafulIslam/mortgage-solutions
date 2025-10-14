"use client"

import MortgageCalculator from "./mortgageCalculators/page"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center relative overflow-hidden py-12 sm:py-0">
        {/* Animated background elements */}
        <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-24 -right-4"></div>
        <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 -bottom-8 left-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl mt-12 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
                  <span className="block text-gray-900">Your Trusted</span>
                  <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                    Home Loan Partner
                  </span>
                </h1>
                <div className="mt-4 md:mt-6 h-1 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse"></div>
              </div>

              <p className="text-gray-600 text-base md:text-lg">
                We provide expert advice and a wide range of home loan programs tailored to your needs. Our experienced team has earned a reputation for excellence with 5-star reviews from satisfied clients. Unlock your dream home with us today!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-all hover:scale-105 transform text-sm md:text-base">
                  Get Pre-Approved
                </button>
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-emerald-500 text-emerald-500 font-bold rounded-lg hover:bg-emerald-500 hover:text-white transition-all hover:scale-105 transform text-sm md:text-base">
                  View Loan Options
                </button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    {
                      title: "Conventional Loans",
                      desc: "Great rates with flexible down payment options"
                    },
                    {
                      title: "FHA Loans",
                      desc: "Low down payment options for first-time buyers"
                    },
                    {
                      title: "VA Loans",
                      desc: "Special programs for veterans and service members"
                    },
                    {
                      title: "Jumbo Loans",
                      desc: "Financing for high-value properties and luxury homes"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50/80 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 transform">
                      <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mb-3 md:mb-4 animate-pulse"></div>
                      <h3 className="text-gray-900 font-semibold mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MortgageCalculator />

      {/* Loan Programs Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Your Independent Mortgage Brokerage</h2>
            <div className="h-1 w-20 md:w-24 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              Are you looking for a reliable mortgage partner to make your dream of homeownership a reality? Look no further than our mortgage company. With our commitment to personalized service and diverse loan programs, we ensure you find the perfect mortgage solution for your unique situation.
            </p>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors text-sm md:text-base">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the sections... */}
    </>
  )
}
export default HomePage