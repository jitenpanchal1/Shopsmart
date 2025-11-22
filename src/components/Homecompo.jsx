import React from 'react'
import Slider from 'react-slick'
import Fashion from "../assets/fashion.png"
import Swatch from "../assets/swatch.png"
import Shoesh from "../assets/shoes.png"
import School from "../assets/school.png"
import Chrimas from "../assets/chrimas.png"
import Makeup from "../assets/makeup.png"

export default function Homecompo() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }

    const images = [
        Swatch,
        Fashion,
        Shoesh,
        School,
        Chrimas,
        Makeup,
    ]

    return (
        <section className="max-w-7xl mx-auto mt-5 px-2">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <div className="w-full aspect-[16/6] overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={img}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>

    )
}
