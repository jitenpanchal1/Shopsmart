import React from 'react'
import GridDistortion from './GridDistortion'
import Image from "../assets/womeninglass.png"

export default function Homepro() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

            {/* BACKGROUND DISTORTION */}
            <div className="absolute inset-0 z-0">
                <GridDistortion
                    imageSrc={Image}
                    grid={150}
                    mouse={0.25}
                    strength={0.35}
                    relaxation={0.85}
                />
            </div>

            {/* GRADIENT OVERLAY FOR DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1] pointer-events-none" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-12 text-center">

                <header className="flex flex-col items-center gap-1">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Elevate Your
                        <span className="block bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
                            Everyday Style
                        </span>
                    </h1>

                    <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                        Not generic. Not boring. This is fashion engineered for people who refuse to blend in.
                        Precision design. Premium feel. Zero compromises.
                    </p>
                </header>

                {/* BUTTONS */}
                <nav className="mt-10 flex flex-col sm:flex-row justify-center gap-10">
                    <button className="group relative overflow-hidden px-10 py-4 rounded-full bg-white text-black font-bold tracking-wide transition-all duration-300 hover:scale-110">
                        <span className="relative z-10">Explore Collection</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </button>

                    <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                        New Arrivals
                    </button>
                </nav>

                {/* FEATURES */}
                <main className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[{
                        title: 'Premium Materials',
                        desc: 'High-grade fabrics crafted for durability and elite comfort.'
                    }, {
                        title: 'Modern Design',
                        desc: 'Bold, clean aesthetics inspired by global trends.'
                    }, {
                        title: 'Fast Experience',
                        desc: 'Optimized user flow with seamless interactions.'
                    }].map((item, i) => (
                        <article
                            key={i}
                            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <h2 className="text-xl font-bold mb-2 tracking-wide">
                                {item.title}
                            </h2>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </article>
                    ))}
                </main>

            </div>
        </section>
    )
}