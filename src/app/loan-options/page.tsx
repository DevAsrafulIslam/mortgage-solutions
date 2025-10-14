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
        term: '30 Years'
    },
    {
        title: 'Adjustable Rate Mortgage',
        description: 'Lower initial rates that may change over time',
        rate: '5.8%',
        term: '5/1 ARM'
    },
    {
        title: 'FHA Loan',
        description: 'Government-backed loans with lower down payments',
        rate: '6.2%',
        term: '30 Years'
    }
]

export default function LoanOptions() {
    const [selectedLoan, setSelectedLoan] = useState<number | null>(null)

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl mt-12 font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explore Loan Options
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
                {loanOptions.map((loan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card
                            className={`cursor-pointer transition-all duration-300 ${selectedLoan === index ? 'border-2 border-blue-500 shadow-lg' : ''
                                }`}
                            onClick={() => setSelectedLoan(index)}
                        >
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-3">{loan.title}</h2>
                                <p className="text-gray-600 mb-4">{loan.description}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-3xl font-bold text-blue-600">{loan.rate}</p>
                                        <p className="text-sm text-gray-500">Interest Rate</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">{loan.term}</p>
                                        <p className="text-sm text-gray-500">Term</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                    disabled={selectedLoan === null}
                >
                    Continue with Selected Loan
                </Button>
            </div>
        </div>
    )
}
