import React from 'react'
import { ChevronLeft } from 'lucide-react'

export default function Prebutton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="
        absolute 
        left-0 ms-1.5
        top-1/2 -translate-y-1/2
        w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14
        flex items-center justify-center
        bg-black/30 backdrop-blur-sm text-white
        rounded-full shadow-md transition-all duration-300 z-20
        hover:bg-black/60 hover:scale-105 active:scale-95
      "
            aria-label="Previous slide"
        >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
    )
}
