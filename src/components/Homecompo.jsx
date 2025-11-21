import React from 'react'
import Slider from 'react-slick';
import Mobile from '../assets/mobileoffer.png'

export default function Homecompo() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            },
        ],
    };

    const images = [
        Mobile,
        "https://picsum.photos/1600/600?random=1",
        3,
        4,
        5,
        6
    ];
    return (
        <section className="max-w-6xl mx-auto mt-5">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="rounded-2xl shadow-lg w-full h-[500px]  object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}
