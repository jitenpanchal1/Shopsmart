import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
    return (
        <footer
            className="relative z-50
        bg-gray-900 border-t border-indigo-700/40 
        text-gray-300 py-12 px-6 sm:px-12
        shadow-[0_-4px_20px_rgba(99,102,241,0.15)]
      "
        >
            {/* Main Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-extrabold text-indigo-400 tracking-wide mb-4">
                        ShopSmart
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Premium products with top-notch quality. Designed for comfort,
                        built for performance.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-800 border border-indigo-600/40
              hover:bg-indigo-600 hover:border-indigo-500
              transition shadow-md"
                        >
                            <Facebook size={18} />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-800 border border-indigo-600/40
              hover:bg-indigo-600 hover:border-indigo-500
              transition shadow-md"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-800 border border-indigo-600/40
              hover:bg-indigo-600 hover:border-indigo-500
              transition shadow-md"
                        >
                            <Twitter size={18} />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-800 border border-indigo-600/40
              hover:bg-indigo-600 hover:border-indigo-500
              transition shadow-md"
                        >
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-indigo-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="hover:text-indigo-400 transition" to="/">Home</Link></li>
                        <li><Link className="hover:text-indigo-400 transition" to="/products">Products</Link></li>
                        <li><Link className="hover:text-indigo-400 transition" to="/cart">Cart</Link></li>
                        <li><Link className="hover:text-indigo-400 transition" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-bold text-indigo-300 mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="hover:text-indigo-400 transition" to="/faq">FAQ</Link></li>
                        <li><Link className="hover:text-indigo-400 transition" to="/privacy">Privacy Policy</Link></li>
                        <li><Link className="hover:text-indigo-400 transition" to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold text-indigo-300 mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-400 mb-3">
                        Subscribe for exclusive deals & offers.
                    </p>

                    {/* Responsive Email Input */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                w-full p-3 rounded-xl bg-gray-800
                border border-indigo-600/40 text-sm
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
                        />
                        <button
                            className="
                px-6 py-3 rounded-xl text-sm font-bold 
                bg-indigo-600 hover:bg-indigo-500 transition
                text-white shadow-md w-full sm:w-auto
              "
                        >
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mt-12 pt-6 border-t border-indigo-700/40 text-center">
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} ShopSmart — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
