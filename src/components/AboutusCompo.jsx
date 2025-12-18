import React from 'react';
import { motion } from 'framer-motion';
import {
    HeartIcon,
    UserGroupIcon,
    GlobeAltIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

function AboutusCompo() {

    const navigate = useNavigate()
    const teamMembers = [
        { name: 'Alex Johnson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', bio: 'Visionary leader with 10+ years in retail tech.' },
        { name: 'Sarah Miller', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', bio: 'Expert in global logistics and supply chains.' },
        { name: 'David Chen', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: 'Building seamless experiences with modern tech.' },
        { name: 'Maria Garcia', role: 'Customer Experience', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', bio: 'Dedicated to turning customers into fans.' },
    ];

    const values = [
        { icon: HeartIcon, title: 'Customer First', description: 'We prioritize your satisfaction above all else' },
        { icon: SparklesIcon, title: 'Quality Focus', description: 'Curating only the best products for our customers' },
        { icon: GlobeAltIcon, title: 'Sustainability', description: 'Committed to eco-friendly practices and products' },
        { icon: UserGroupIcon, title: 'Community', description: 'Building connections that go beyond shopping' },
    ];

    const stats = [
        { number: '50K+', label: 'Happy Customers' },
        { number: '10K+', label: 'Products' },
        { number: '24/7', label: 'Support' },
        { number: '100+', label: 'Brand Partners' },
    ];

    // Animation Variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#1E293B] selection:bg-[#4F46E5] selection:text-white overflow-x-hidden">

            {/* Hero Section with Parallax Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden bg-[#1E293B] py-24 lg:py-32"
            >
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Our <span className="text-[#4F46E5]">Story</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        We're revolutionizing online shopping with exceptional products,
                        unbeatable prices, and customer service that truly cares.
                    </motion.p>
                </div>
            </motion.div>

            {/* Mission Section with Interactive Stats */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-[#4F46E5] inline-block"></span>
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded in 2020, we started with a simple idea: make premium products
                            accessible to everyone without compromising on quality.
                        </p>
                        <div className="space-y-4">
                            {['Direct Sourcing', 'Transparent Pricing', 'Ethical Logistics'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#4F46E5]">
                                    <div className="w-2 h-2 rounded-full bg-[#4F46E5]"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-indigo-50/50"
                            >
                                <div className="text-3xl font-bold text-[#4F46E5] mb-1">{stat.number}</div>
                                <div className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section - Hover Grid */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
                        <p className="text-gray-600">The foundation of every decision we make.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#4F46E5]/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4F46E5] transition-colors duration-300">
                                    <value.icon className="w-7 h-7 text-[#4F46E5] group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Interactive Bio Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet the Visionaries</h2>
                    <p className="text-gray-600">The humans behind the screens.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-2xl bg-[#1E293B]"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-80 object-cover opacity-90 group-hover:opacity-40 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-[#4F46E5] font-medium mb-4">{member.role}</p>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Animated Gradient */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-r from-[#4F46E5] via-indigo-600 to-purple-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => navigate("/products")}
                                className="px-10 py-4 bg-white text-[#4F46E5] font-bold rounded-full cursor-pointer hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all">
                                Shop Now
                            </button>
                            <button
                                onClick={() => navigate("/contact")}
                                className="px-10 py-4 bg-transparent border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all cursor-pointer">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                    {/* Animated Background Shape */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </motion.div>
            </section>
        </div>
    );
}

export default AboutusCompo;