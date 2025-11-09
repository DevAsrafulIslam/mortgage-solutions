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
                to_email: "kyle@myfreedomloan.com",
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
            <div className="min-h-screen bg-gray-50 py-8 sm:py-12 mt-6 md:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h1 className="text-2xl mt-8 sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">
                        Contact Our Mortgage Experts
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            {/* Email */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 sm:p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Email</h2>
                                        <a href="mailto:info@myfreedomloan.com" className="text-blue-600 hover:text-blue-700 transition break-all text-sm sm:text-base">
                                            info@myfreedomloan.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Hotline */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 sm:p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Mortgage Hotline</h2>
                                        <p className="text-gray-600 text-sm sm:text-base">(248) 579-5499</p>
                                    </div>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 sm:p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="bg-purple-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Main Office</h2>
                                        <p className="text-gray-600 text-sm sm:text-base">3530 Pontiac Lake Road<br />Waterford, Michigan 48328</p>
                                    </div>
                                </div>
                            </div>

                            {/* NMLS */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 sm:p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="bg-indigo-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-gray-800">NMLS Info</h2>
                                        <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition text-sm sm:text-base">
                                            NMLS ID: #275999
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Request Mortgage Information</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        name="query"
                                        rows={4}
                                        value={formData.query}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                                        placeholder="Type your message here"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm"
                                >
                                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                                </button>

                                {/* Data Collection Notice */}
                                <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-3 w-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <div className="ml-2 text-xs text-blue-700">
                                            <p className="font-medium mb-0.5">Privacy & Security Notice</p>
                                            <p>Your information is encrypted and transmitted securely. We will only use your contact information to respond to your inquiry and will not share it with third parties without your consent. By submitting this form, you consent to our <a href="/privacy" className="underline hover:text-blue-800">privacy policy</a>.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">By submitting this form, you consent to receive calls, texts, or emails from Freedom Mortgage Solutions LLC at the number provided, even if on a Do-Not-Call list. Consent is not required to apply.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
