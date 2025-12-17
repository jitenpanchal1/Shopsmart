import React from 'react'
import CartsCompo from '../components/CartsCompo'
import { useEffect } from 'react';

function Cartitems() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div>
            {/* <div className="bg-yellow-500 text-black text-center py-2 font-semibold">
                🚧 Preview Mode: Project Under Development
            </div> */}
            <CartsCompo />

        </div>
    )
}

export default Cartitems
