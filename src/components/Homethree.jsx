import React from "react";
import RotatingText from "../../components/animata/button/RotatingText";
import BlurText from "../../components/animata/button/BlurText";
import SlideArrowButton from "../../components/animata/button/slide-arrow-button";

export default function Homethree() {
    return (
        <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center pt-25 pb-25">
            <div className="absolute inset-0" />
            <div className="relative z-10 max-w-6xl w-full text-center px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mx-auto  mb-5 lg:mb-5">
                    <BlurText
                        text="Shop Smarter. Look Better. Live Premium."
                        delay={120}
                        animateBy="words"
                        direction="top"
                        className="text-4xl text-center md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    />
                </div>
                <div className="flex justify-center mb-8 lg:mb-10">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent rounded-full" />
                </div>
                <div className="mb-8 lg:mb-10">
                    <RotatingText
                        texts={[
                            "Curated Excellence",
                            "Smart Shopping",
                            "Premium Collections",
                            "Exclusive Access",
                            "Elevate Your Style",
                            "Unmatched Quality",
                            "Seamless Experience"
                        ]}
                        mainClassName="inline-block px-6 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-[#4F46E5] to-[#7C73E6] text-white text-xl lg:text-2xl font-semibold rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20"
                        staggerFrom="last"
                        initial={{ y: "90%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-90%", opacity: 0 }}
                        staggerDuration={0.04}
                        splitLevelClassName="overflow-hidden"
                        transition={{ type: "spring", damping: 22, stiffness: 300 }}
                        rotationInterval={2500}
                    />
                </div>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto tracking-wide">
                    Discover carefully curated collections, exclusive deals, and a seamless shopping experience designed for the modern lifestyle.
                </p>
                <div className="flex justify-center ">
                    <SlideArrowButton />
                </div>
            </div>
        </section>
    );
}