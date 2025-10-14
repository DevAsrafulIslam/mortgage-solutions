"use client";
import { useState } from "react";

export default function MortgageCalculator() {
    const [purchasePrice, setPurchasePrice] = useState(250000);
    const [term, setTerm] = useState(30);
    const [downPayment, setDownPayment] = useState(0);
    const [interestRate, setInterestRate] = useState(1);
    const [mortgageInsuranceRate, setMortgageInsuranceRate] = useState(0);
    const [annualTaxes, setAnnualTaxes] = useState(0);
    const [annualInsurance, setAnnualInsurance] = useState(600);
    const [monthlyHOA, setMonthlyHOA] = useState(50);

    // Calculation
    const loanAmount = purchasePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numPayments = term * 12;

    const principalAndInterest =
        monthlyInterest === 0
            ? loanAmount / numPayments
            : (loanAmount *
                monthlyInterest *
                Math.pow(1 + monthlyInterest, numPayments)) /
            (Math.pow(1 + monthlyInterest, numPayments) - 1);

    const monthlyTaxes = annualTaxes / 12;
    const monthlyInsurance = annualInsurance / 12;
    const monthlyPMI = (loanAmount * (mortgageInsuranceRate / 100)) / 12;

    const totalPayment =
        principalAndInterest +
        monthlyTaxes +
        monthlyInsurance +
        monthlyHOA +
        monthlyPMI;

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT SIDE FORM */}
                <div className="bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-3xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-8 text-teal-800">Mortgage Calculator</h2>

                    <div className="space-y-6">
                        {/* Purchase Price */}
                        <div className="relative">
                            <label className="text-sm font-medium text-teal-700">Purchase Price ($)</label>
                            <input
                                type="number"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                className="mt-1 w-full px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Mortgage Term */}
                        <div className="relative">
                            <label className="text-sm font-medium text-teal-700">Mortgage Term</label>
                            <select
                                value={term}
                                onChange={(e) => setTerm(Number(e.target.value))}
                                className="mt-1 w-full px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            >
                                <option value={5}>5 Years</option>
                                <option value={10}>10 Years</option>
                                <option value={15}>15 Years</option>
                                <option value={20}>20 Years</option>
                                <option value={25}>25 Years</option>
                                <option value={30}>30 Years</option>
                            </select>
                        </div>

                        {/* Sliders */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-teal-700">Down Payment</label>
                                    <span className="text-emerald-600 font-medium">${downPayment.toLocaleString()}</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-2">
                                    <div 
                                        className="absolute h-2 bg-teal-500 rounded-lg" 
                                        style={{ width: `${(downPayment / purchasePrice) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={0}
                                        max={purchasePrice}
                                        step={1000}
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-teal-700">Interest Rate</label>
                                    <span className="text-emerald-600 font-medium">{interestRate}%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-2">
                                    <div 
                                        className="absolute h-2 bg-teal-500 rounded-lg" 
                                        style={{ width: `${(interestRate / 15) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={0}
                                        max={15}
                                        step={0.1}
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-teal-700">Insurance Rate</label>
                                    <span className="text-emerald-600 font-medium">{mortgageInsuranceRate}%</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-2">
                                    <div 
                                        className="absolute h-2 bg-teal-500 rounded-lg" 
                                        style={{ width: `${(mortgageInsuranceRate / 5) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={0}
                                        max={5}
                                        step={0.1}
                                        value={mortgageInsuranceRate}
                                        onChange={(e) => setMortgageInsuranceRate(Number(e.target.value))}
                                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <label className="text-sm font-medium text-teal-700">Annual Taxes</label>
                                    <span className="text-emerald-600 font-medium">${annualTaxes.toLocaleString()}</span>
                                </div>
                                <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-2">
                                    <div 
                                        className="absolute h-2 bg-teal-500 rounded-lg" 
                                        style={{ width: `${(annualTaxes / 20000) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={0}
                                        max={20000}
                                        step={100}
                                        value={annualTaxes}
                                        onChange={(e) => setAnnualTaxes(Number(e.target.value))}
                                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Number Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="text-sm font-medium text-teal-700">Annual Insurance ($)</label>
                                <input
                                    type="number"
                                    value={annualInsurance}
                                    onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                                    className="mt-1 w-full px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm font-medium text-teal-700">Monthly HOA ($)</label>
                                <input
                                    type="number"
                                    value={monthlyHOA}
                                    onChange={(e) => setMonthlyHOA(Number(e.target.value))}
                                    className="mt-1 w-full px-4 py-3 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE RESULTS */}
                <div className="bg-gradient-to-br from-blue-600 to-sky-700 text-white p-8 rounded-3xl shadow-xl">
                    <div className="text-center mb-12">
                        <p className="text-blue-100 mb-2">Monthly Payment</p>
                        <h2 className="text-5xl font-bold">${totalPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-blue-400/30 hover:bg-blue-500/10 transition-colors">
                            <span className="text-blue-100">Principal & Interest</span>
                            <span className="font-semibold">${principalAndInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-blue-400/30 hover:bg-blue-500/10 transition-colors">
                            <span className="text-blue-100">Monthly Taxes</span>
                            <span className="font-semibold">${monthlyTaxes.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-blue-400/30 hover:bg-blue-500/10 transition-colors">
                            <span className="text-blue-100">Monthly HOA</span>
                            <span className="font-semibold">${monthlyHOA.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-blue-400/30 hover:bg-blue-500/10 transition-colors">
                            <span className="text-blue-100">Monthly Insurance</span>
                            <span className="font-semibold">${monthlyInsurance.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 hover:bg-blue-500/10 transition-colors">
                            <span className="text-blue-100">Monthly PMI</span>
                            <span className="font-semibold">${monthlyPMI.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                    </div>

                    <p className="text-xs text-blue-100/80 mt-8 text-center">
                        *This calculator provides an estimate only and does not reflect an
                        official mortgage offer.
                    </p>
                </div>
            </div>
        </div>
    );
}
