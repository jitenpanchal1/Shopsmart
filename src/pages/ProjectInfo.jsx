import React, { useEffect } from 'react';

function ProjectInfo() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const libraries = [
        {
            category: "Core Framework",
            items: [
                { name: "React", version: "^19.2.0", description: "JavaScript library for building user interfaces", color: "bg-blue-500" },
                // { name: "React DOM", version: "^19.2.0", description: "React package for working with the DOM", color: "bg-blue-600" },
                { name: "React Router", version: "^7.9.6", description: "Declarative routing for React applications", color: "bg-red-500" },
            ]
        },
        {
            category: "State Management",
            items: [
                { name: "Redux Toolkit", version: "^2.10.1", description: "Official Redux toolset for efficient Redux development", color: "bg-purple-500" },
                { name: "React Redux", version: "^9.2.0", description: "Official React bindings for Redux", color: "bg-purple-600" },
            ]
        },
        {
            category: "Styling & UI",
            items: [
                { name: "Tailwind CSS", version: "^4.1.17", description: "Utility-first CSS framework", color: "bg-cyan-500" },
                { name: "Lucide React", version: "^0.554.0", description: "Beautiful & consistent icon toolkit", color: "bg-indigo-500" },
                { name: "React Icons", version: "^5.5.0", description: "Popular icons library for React", color: "bg-pink-500" },
                { name: "Heroicons", version: "^2.2.0", description: "Beautiful hand-crafted SVG icons", color: "bg-orange-500" },
            ]
        },
        {
            category: "Animation & Effects",
            items: [
                { name: "Framer Motion", version: "^12.23.26", description: "Production-ready motion library for React", color: "bg-green-500" },
                { name: "Motion", version: "^12.23.24", description: "Animation library for React", color: "bg-green-600" },
                { name: "GSAP", version: "^3.13.0", description: "Professional-grade animation library", color: "bg-teal-500" },
                { name: "AOS (Animate On Scroll)", version: "^2.3.4", description: "Animate elements on scroll", color: "bg-emerald-500" },
                { name: "React Scroll Parallax", version: "^3.5.0", description: "Parallax scrolling effects for React", color: "bg-lime-500" },
                { name: "Three.js", version: "^0.181.2", description: "3D graphics library for web", color: "bg-gray-600" },
            ]
        },
        {
            category: "Carousel & Sliders",
            items: [
                { name: "React Slick", version: "^0.31.0", description: "Carousel component built with React", color: "bg-yellow-500" },
                { name: "Slick Carousel", version: "^1.8.1", description: "The last carousel you'll ever need", color: "bg-yellow-600" },
                { name: "Swiper", version: "^12.0.3", description: "Modern touch slider", color: "bg-amber-500" },
            ]
        },
        {
            category: "HTTP & API",
            items: [
                { name: "Axios", version: "^1.13.2", description: "Promise-based HTTP client for the browser", color: "bg-violet-500" },
                { name: "MockApi", version: "^Latest", description: "Store user and all products", color: "bg-gray-500" },
            ]
        },
        {
            category: "Email Services",
            items: [
                { name: "EmailJS Browser", version: "^4.4.1", description: "Send emails directly from client-side JavaScript", color: "bg-rose-500" },
                { name: "EmailJS", version: "^4.0.3", description: "Email service integration", color: "bg-rose-600" },
            ]
        },
        {
            category: "Additional Libraries",
            items: [
                { name: "React Lottie Player", version: "^2.1.0", description: "Lottie animations for React", color: "bg-fuchsia-500" },
            ]
        },
        {
            category: "Build Tools & DevDependencies",
            items: [
                { name: "Vite", version: "^7.2.2", description: "Next generation frontend tooling", color: "bg-indigo-600" },
                { name: "ESLint", version: "^9.39.1", description: "Code linting and quality tool", color: "bg-slate-600" },
                { name: "PostCSS", version: "^8.5.6", description: "CSS processing tool", color: "bg-slate-500" },
                { name: "Autoprefixer", version: "^10.4.22", description: "CSS vendor prefixing tool", color: "bg-gray-500" },
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Project Information
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Comprehensive overview of technologies, libraries, and frameworks used in ShopSmart
                    </p>
                </div>

                {/* Project Overview Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-slate-200">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                            SS
                        </span>
                        ShopSmart - E-Commerce Platform
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">Project Description</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    ShopSmart is a modern, fully-featured e-commerce web application built for learning purposes. 
                                    It showcases a complete shopping experience with product browsing, cart management, user authentication, 
                                    and responsive design.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">Key Features</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">✓</span>
                                        <span>Product catalog with search and filtering</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">✓</span>
                                        <span>Shopping cart and checkout system</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">✓</span>
                                        <span>User authentication and protected routes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">✓</span>
                                        <span>Responsive design with mobile support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-600 mt-1">✓</span>
                                        <span>Modern animations and interactive UI</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Redux</span>
                                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Vite</span>
                                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">React Router</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Framer Motion</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">Total Libraries</h3>
                                <p className="text-4xl font-bold text-indigo-600">
                                    {libraries.reduce((acc, cat) => acc + cat.items.length, 0)}
                                    <span className="text-lg text-slate-500 font-normal ml-2">libraries</span>
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Across {libraries.length} categories
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Libraries by Category */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
                        Libraries & Technologies
                    </h2>
                    
                    {libraries.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4">
                                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.items.map((lib, libIndex) => (
                                        <div
                                            key={libIndex}
                                            className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`${lib.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                    {lib.name.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                                                        {lib.name}
                                                    </h4>
                                                    <p className="text-xs text-indigo-600 font-medium mb-2 bg-indigo-50 px-2 py-1 rounded inline-block">
                                                        {lib.version}
                                                    </p>
                                                    <p className="text-sm text-slate-600 leading-relaxed">
                                                        {lib.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">Learning Project</h3>
                        <p className="text-indigo-100 max-w-2xl mx-auto">
                            This project was built for educational purposes to explore modern web development technologies, 
                            best practices, and create a fully functional e-commerce application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;

