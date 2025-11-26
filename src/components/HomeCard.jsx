import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
    {
        id: 1,
        title: "NIKE AIR",
        subtitle: "Soft Cushioning",
        description: "Engineered for smooth motion with maximum comfort and durability built for athletes.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 2,
        title: "SONY PRO",
        subtitle: "Premium Audio",
        description: "Immersive sound clarity with deep bass, noise reduction, and studio-level performance.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        id: 3,
        title: "APPLE",
        subtitle: "Ultra Minimal",
        description: "Minimal design, extreme performance, seamless interface and stunning user experience.",
        img: "https://www.techspot.com/images2/news/bigimage/2025/09/2025-09-09-image-34.jpg"
    },
    {
        id: 4,
        title: "ADIDAS",
        subtitle: "Street Class",
        description: "Comfortable lifestyle sneakers with premium material and unique design.",
        img: "https://img.freepik.com/premium-photo/purple-black-sneaker-with-word-nike-it_900370-9692.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 5,
        title: "ROLEX",
        subtitle: "Luxury Watch",
        description: "Timeless precision and elegance crafted for authority and style.",
        img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    },
    {
        id: 6,
        title: "BOSE SPEAKER",
        subtitle: "Deep Bass",
        description: "High quality speaker with immersive sound clarity and long-lasting battery.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErfzV8VhqP1JBKFc8CU_7_c-iHvRllFeJVw&s"
    }
];

export default function InteractiveCards() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <section className="px-6 py-16">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {products.map((p, index) => (
                    <div
                        key={p.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        className="group bg-white/1 backdrop-blur-xl rounded-2xl 
                        overflow-hidden shadow-lg border border-white/20 
                        cursor-pointer transition-all duration-700 
                        hover:-translate-y-3 hover:scale-[1.04]
                        hover:shadow-[0px_20px_50px_rgba(99,102,241,0.35)]
                        ease-out w-full flex flex-col sm:flex-row"
                    >
                        {/* IMAGE LEFT */}
                        <div className="relative overflow-hidden sm:w-1/3 w-full">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-48 sm:h-full object-cover 
                                transition-all duration-[1200ms] ease-out 
                                group-hover:scale-110 group-hover:rotate-1"
                            />

                            <div className="absolute inset-0 opacity-0 
                                group-hover:opacity-25 transition-all duration-700 
                                bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl"></div>
                        </div>

                        {/* CONTENT RIGHT */}
                        <div className="p-6 sm:w-2/3 w-full transition-all duration-700 
                            group-hover:translate-x-1">
                            <h3 className="text-2xl font-bold text-white mb-1">
                                {p.title}
                            </h3>

                            <p className="text-indigo-300 text-sm mb-2 tracking-wide">
                                {p.subtitle}
                            </p>

                            <p className="text-gray-300 text-sm mb-4 line-clamp-3 overflow-hidden">
                                {p.description}
                            </p>

                            <button className="mt-2 px-5 py-2 rounded-full bg-white/10 
                                text-white border border-white/20 text-sm
                                backdrop-blur-xl transition-all duration-500
                                group-hover:bg-white/20 group-hover:border-white/40 
                                group-hover:scale-105">
                                Explore →
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
