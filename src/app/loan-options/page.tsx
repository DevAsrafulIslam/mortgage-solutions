'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const loanOptions = [
    {
        title: 'Fixed Rate Mortgage',
        description: 'Stable monthly payments with locked interest rate',
        rate: '6.5%',
        term: '30 Years',
        apr: '6.7% APR',
        conditions: 'Rates subject to credit approval. Terms and conditions apply.'
    },
    {
        title: 'Adjustable Rate Mortgage',
        description: 'Lower initial rates that may change over time',
        rate: '5.8%',
        term: '5/1 ARM',
        apr: '6.1% APR',
        conditions: 'Initial rate fixed for 5 years, then adjusts annually. Rates subject to credit approval.'
    },
    {
        title: 'FHA Loan',
        description: 'Government-backed loans with lower down payments',
        rate: '6.2%',
        term: '30 Years',
        apr: '6.4% APR',
        conditions: 'FHA loans require mortgage insurance. Rates subject to credit approval and FHA guidelines.'
    }
]

export default function LoanOptions() {
    const [selectedLoan, setSelectedLoan] = useState<number | null>(null)

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 mt-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl mt-8 sm:mt-12 font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explore Loan Options
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {loanOptions.map((loan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        <Card
                            className={`cursor-pointer transition-all duration-300 h-full ${selectedLoan === index ? 'border-2 border-blue-500 shadow-lg' : ''
                                }`}
                            onClick={() => setSelectedLoan(index)}
                        >
                            <CardContent className="p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{loan.title}</h2>
                                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{loan.description}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">{loan.rate}</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Interest Rate</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-base sm:text-lg font-semibold">{loan.term}</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Term</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                    disabled={selectedLoan === null}
                >
                    Continue with Selected Loan
                </Button>
            </div>

            <div className="mt-6 sm:mt-8 max-w-4xl mx-auto bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Important Rate Disclosures</h3>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                    <p>• Rates shown are for illustrative purposes only and are not guaranteed.</p>
                    <p>• Actual rates may vary based on credit score, loan-to-value ratio, loan amount, property type, and other factors.</p>
                    <p>• Annual Percentage Rate (APR) includes estimated fees and costs.</p>
                    <p>• All loans are subject to credit approval and property approval.</p>
                    <p>• Additional terms and conditions apply. Contact us for current rates and terms.</p>
                    <p>• Freedom Mortgage Solutions LLC is an equal housing lender. NMLS #275999</p>
                </div>
            </div>
        </div>
    )
}
