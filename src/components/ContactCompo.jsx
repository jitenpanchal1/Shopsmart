import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function ContactCompo() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            setError("Name is required");
            return;
        }
        if (!form.email.trim()) {
            setError("Email is required");
            return;
        }
        if (!form.message.trim()) {
            setError("Message cannot be empty");
            return;
        }

        setError("");
        setLoading(true);

        emailjs
            .sendForm(
                "service_tbrs5qk",
                "template_1dbjxhm",
                formRef.current,
                "_kSOzxWYOS8NrB1CE"
            )
            .then(() => {
                setSuccess(true);
                setForm({ name: "", email: "", message: "" });
                formRef.current.reset();
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch(() => {
                setError("Something went wrong. Try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-[#4F46E5]/10 rounded-full mb-4">
                        <span className="text-[#4F46E5] font-semibold">Get In Touch</span>
                    </div>
                    <h1 className="text-5xl font-bold text-[#1E293B] mb-4">
                        Let's <span className="text-[#4F46E5]">Connect</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a question, feedback, or a project in mind? Fill out the form below
                        and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mr-4">
                                    <FaEnvelope className="text-2xl text-[#4F46E5]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1E293B]">Email</h3>
                            </div>
                            <p className="text-gray-600 mb-2">Drop us a line anytime</p>
                            <a
                                href="mailto:jeetensdev@gmail.com"
                                className="text-[#4F46E5] font-semibold text-lg hover:text-[#4338CA] transition-colors"
                            >
                                jeetensdev@gmail.com
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mr-4">
                                    <FaPhone className="text-2xl text-[#4F46E5]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1E293B]">Phone</h3>
                            </div>
                            <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm</p>
                            <a
                                href="tel:+918490951618"
                                className="text-[#4F46E5] font-semibold text-lg hover:text-[#4338CA] transition-colors"
                            >
                                +91 8490951618
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mr-4">
                                    <FaMapMarkerAlt className="text-2xl text-[#4F46E5]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1E293B]">Location</h3>
                            </div>
                            <p className="text-gray-600 mb-2">Based in</p>
                            <p className="text-[#1E293B] font-semibold text-lg">India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                            <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Send a Message</h2>
                            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon.</p>

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/30 focus:border-[#4F46E5] transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/30 focus:border-[#4F46E5] transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                                        Your Message *
                                    </label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Type your message here..."
                                        className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/30 focus:border-[#4F46E5] transition-all bg-gray-50 hover:bg-white resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading || success}
                                    className="w-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white font-semibold py-4 rounded-xl hover:from-[#4338CA] hover:to-[#4F46E5] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : success ? (
                                        <>
                                            <FaCheckCircle className="text-lg" />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-lg" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                {error && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                                        <p className="text-red-700 font-medium">{error}</p>
                                    </div>
                                )}

                                {success && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r animate-pulse">
                                        <p className="text-green-700 font-medium flex items-center">
                                            <FaCheckCircle className="mr-2" />
                                            ✅ Message sent successfully! We'll get back to you soon.
                                        </p>
                                    </div>
                                )}
                            </form>

                            <p className="text-gray-500 text-sm mt-6 text-center">
                                We respect your privacy. Your information is secure and will never be shared.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-[#1E293B] mb-3">Response Time</h3>
                        <p className="text-gray-600">
                            We strive to respond to all inquiries within{" "}
                            <span className="text-[#4F46E5] font-semibold">24 hours</span>
                        </p>
                        <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Typically responds in a few hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactCompo;