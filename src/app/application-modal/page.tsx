"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        ssn: "",
        loanPurpose: "",
        propertyType: "",
        purchasePrice: "",
        downPayment: "",
    });
    if (!isOpen) return null;
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Send the complete form data in the email
            const res = await emailjs.send(
                "service_g69pu1f", // replace with your EmailJS service ID
                "template_a88lfsg", // replace with your EmailJS template ID
                {
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    dateOfBirth: formData.dateOfBirth,
                    ssn: formData.ssn,
                    loanPurpose: formData.loanPurpose,
                    propertyType: formData.propertyType,
                    purchasePrice: formData.purchasePrice,
                    downPayment: formData.downPayment,
                },
                "5XUYzxhDN4CrtHgF0" // replace with your EmailJS public key
            );
            console.log("EmailJS Response:", res);
            toast.success("Application submitted successfully!", {
                description: "We will contact you shortly to discuss your application.",
            });
            onClose();
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                ssn: "",
                loanPurpose: "",
                propertyType: "",
                purchasePrice: "",
                downPayment: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Submission failed. Please try again.");
        }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            {/* Modal */}
            <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-lg p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
                    type="button"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Start Your Application
                    </h2>
                    <div className="h-1 w-20 sm:w-24 bg-emerald-500 mt-2"></div>
                </div>

                {/* Form */}
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Social Security Number
                                </label>
                                <input
                                    type="text"
                                    name="ssn"
                                    value={formData.ssn}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="XXX-XX-XXXX"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Loan Information */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                            Loan Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Loan Purpose
                                </label>
                                <select
                                    name="loanPurpose"
                                    value={formData.loanPurpose}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    required
                                >
                                    <option value="">Select purpose</option>
                                    <option value="purchase">Purchase a home</option>
                                    <option value="refinance">Refinance existing mortgage</option>
                                    <option value="cashout">Cash-out refinance</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Property Type
                                </label>
                                <select
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    required
                                >
                                    <option value="">Select property type</option>
                                    <option value="single">Single Family Home</option>
                                    <option value="condo">Condominium</option>
                                    <option value="townhouse">Townhouse</option>
                                    <option value="multi">Multi-Family Home</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Estimated Purchase Price
                                </label>
                                <input
                                    type="number"
                                    name="purchasePrice"
                                    value={formData.purchasePrice}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="$"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Down Payment Amount
                                </label>
                                <input
                                    type="number"
                                    name="downPayment"
                                    value={formData.downPayment}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base"
                                    placeholder="$"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-0 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 sm:mr-2 hover:bg-gray-50 text-sm sm:text-base"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationModal;
