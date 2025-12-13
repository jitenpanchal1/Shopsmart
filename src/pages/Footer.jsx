import React from "react";
import { Link } from "react-router";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaHeart,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaArrowRight
} from "react-icons/fa";

function FooterCompo() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { icon: <FaFacebook />, href: "https://www.instagram.com/jiten_42_", color: "hover:text-blue-600" },
        { icon: <FaTwitter />, href: "https://www.instagram.com/jiten_42_", color: "hover:text-sky-400" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/jiten_42_", color: "hover:text-pink-500" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jiten-panchal-07a633226/", color: "hover:text-blue-700" },
        { icon: <FaGithub />, href: "https://github.com/jitenpanchal1", color: "hover:text-gray-800" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ];

    return (
        <footer className="bg-[#1E293B] text-white relative z-30">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl font-bold">J</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                JeetensDev
                            </span>
                        </Link>

                        <p className="text-gray-400 leading-relaxed">
                            Crafting digital experiences that inspire, engage, and deliver results.
                            Let's build something amazing together.
                        </p>

                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                                    aria-label={`${social.icon.type.name} social link`}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <span className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
                                Quick Links
                            </span>
                            <div className="ml-3 h-px flex-1 bg-gradient-to-r from-[#4F46E5] to-transparent"></div>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="flex items-center text-gray-400 hover:text-white group transition-colors duration-300"
                                    >
                                        <FaArrowRight className="mr-3 text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Wider */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                            <span className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
                                Contact Info
                            </span>
                            <div className="ml-3 h-px flex-1 bg-gradient-to-r from-[#4F46E5] to-transparent"></div>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center mr-4 flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Location</p>
                                    <p className="text-gray-400">India</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center mr-4 flex-shrink-0">
                                    <FaPhone className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Phone</p>
                                    <a href="tel:+918490951618" className="text-gray-400 hover:text-white transition-colors text-lg">
                                        +91 8490951618
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center mr-4 flex-shrink-0">
                                    <FaEnvelope className="text-white text-lg" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Email</p>
                                    <a href="mailto:jeetensdev@gmail.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                                        jeetensdev@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1E293B] via-[#2D3748] to-[#1E293B] border border-gray-800">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-3">
                                Stay Updated with{" "}
                                <span className="bg-gradient-to-r from-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">
                                    Our Newsletter
                                </span>
                            </h3>
                            <p className="text-gray-400">
                                Subscribe to our newsletter to receive updates on new projects and insights.
                            </p>
                        </div>
                        <div>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-white placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white font-semibold rounded-xl hover:from-[#4338CA] hover:to-[#4F46E5] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-center md:text-left">
                            © {currentYear} JeetensDev. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Made with</span>
                            <FaHeart className="text-red-500 animate-pulse" />
                            <span>in India</span>
                        </div>

                        <div className="flex space-x-6">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
                aria-label="Back to top"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}

export default FooterCompo;