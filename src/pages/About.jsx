import React from 'react'
import { useEffect } from 'react';
import AboutusCompo from '../components/AboutusCompo';

function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        // <div className="bg-yellow-500 text-black text-center py-2 font-semibold">
        //     🚧 Preview Mode: Project Under Development
        // </div>
        <AboutusCompo />
    )
}

export default About
