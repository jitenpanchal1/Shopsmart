import React from 'react'
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="bg-yellow-500 text-black text-center py-2 font-semibold">
            🚧 Preview Mode: Project Under Development
        </div>
    )
}

export default About
