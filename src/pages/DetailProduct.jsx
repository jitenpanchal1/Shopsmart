import React from 'react'
import DetailP from '../components/DetailP'
import { useEffect } from 'react';

function DetailProduct() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>
            <DetailP />

        </>
    )
}

export default DetailProduct
