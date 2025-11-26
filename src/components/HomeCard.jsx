import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const products = [
    {
        id: 1,
        title: "NIKE AIR",
        slogan: "Engineered for smooth motion.",
        highlight: "Run smarter and feel unstoppable.",
        color: "from-[#4F46E5] to-[#4F46E5]",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 2,
        title: "SONY PRO",
        slogan: "Immersive audio clarity.",
        highlight: "Sound that owns the silence.",
        color: "from-[#4F46E5] to-[#4F46E5]",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        id: 3,
        title: "APPLE",
        slogan: "Minimal design, max performance.",
        highlight: "Technology with intention.",
        color: "from-[#4F46E5] to-[#4F46E5]",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 4,
        title: "ADIDAS",
        slogan: "Street style meets performance.",
        highlight: "Comfort and identity in every step.",
        color: "from-[#4F46E5] to-[#4F46E5]",
        img: "https://images.unsplash.com/photo-1606813902774-79b1639f277c"
    },
    {
        id: 5,
        title: "ROLEX",
        slogan: "Timeless precision and elegance.",
        highlight: "Crafted for authority and style.",
        color: "from-[#4F46E5] to-[#4F46E5]",
        img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    }
]

export default function HomeCard() {
    return (
        <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="relative max-w-7xl mx-auto space-y-12 sm:space-y-16">

                {products.map((product, index) => (
                    <Parallax key={product.id} speed={index % 2 === 0 ? -6 : 6}>
                        <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} group`}>

                            {/* IMAGE BLOCK */}
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-2 border-[#4F46E5] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:-translate-y-1"
                                />
                                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] sm:text-xs md:text-xs lg:text-sm font-bold text-white rounded-full bg-gradient-to-r ${product.color} transition-all duration-500 group-hover:scale-105 group-hover:translate-y-[-3px]`}>
                                    {product.title}
                                </div>
                            </div>

                            {/* CARD CONTENT BLOCK */}
                            <div className="bg-[#1E293B]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl max-w-full md:max-w-xl transition-transform duration-500 hover:scale-105">
                                <p className="uppercase tracking-widest text-[9px] sm:text-xs md:text-xs text-white/70 mb-2">
                                    {product.slogan}
                                </p>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                                    {product.highlight}
                                </h3>
                                <span className={`inline-block text-sm sm:text-base md:text-sm font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                                    EXPLORE COLLECTION →
                                </span>
                            </div>

                        </div>
                    </Parallax>
                ))}

            </div>
        </section>
    )
}
