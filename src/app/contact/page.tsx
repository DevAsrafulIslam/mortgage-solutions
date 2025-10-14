"use client";

import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        query: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            //  EmailJS account ID
            const serviceId = "service_g69pu1f";
            const templateId = "template_06hupm7";
            const publicKey = "5XUYzxhDN4CrtHgF0";

            const templateParams = {
                fullName: formData.fullName,
                email: formData.email,
                subject: formData.subject,
                query: formData.query,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            toast.success("Your message has been sent successfully!", {
                description: "We’ll get back to you shortly.",
            });

            setFormData({
                fullName: "",
                email: "",
                subject: "",
                query: "",
            });

            setStatus("success");
        } catch (error) {
            console.error(error);
            toast.error("Failed to send your message. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h1 className="text-2xl mt-12 sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
                        Contact Our Mortgage Experts
                    </h1>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Info */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Email */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 sm:p-8 border border-gray-100">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Email</h2>
                                        <a href="mailto:signup@myfreedomloan.com" className="text-blue-600 hover:text-blue-700 transition break-all">
                                            signup@myfreedomloan.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Hotline */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 sm:p-8 border border-gray-100">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Mortgage Hotline</h2>
                                        <p className="text-gray-600">1-2487070045</p>
                                    </div>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 sm:p-8 border border-gray-100">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Main Office</h2>
                                        <p className="text-gray-600">3520 Pontiac Lake Rd<br />Waterford, MI 48328<br />United States</p>
                                    </div>
                                </div>
                            </div>

                            {/* NMLS */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 sm:p-8 border border-gray-100">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">NMLS Info</h2>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition">
                                            NMLS ID: #123456
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Request Mortgage Information</h2>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="query"
                                        rows={6}
                                        value={formData.query}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200"
                                        placeholder="Type your message here"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                                >
                                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
