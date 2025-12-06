import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { Link } from "react-router"
import { i } from "motion/react-client"

gsap.registerPlugin(Draggable, InertiaPlugin)

const cardsData = [
  {
    id : 1,
    name: "Nike Air Max",
    description: "Responsive cushioning with a bold, everyday street-style look.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    link: "/products",
  },
  {
    id : 2,
    name: "Adidas Ultraboost",
    description: "High-energy return, ultra comfort built for long runs.",
    price: 11999,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    link: "/products",
  },
  {
    id : 3,
    name: "iPhone 15 Pro",
    description: "Flagship performance with ultra-fast charging and smooth display.",
    price: 69999,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179",
    link: "/products",
  },
  {
    id : 4,
    name: "Samsung AI EcoBubble",
    description: "Smart washing machine with AI wash, EcoBubble and steam hygiene.",
    price: 42999,
    image: "https://images.t2online.in/cdn-cgi/image/width=640,quality=70/https://apis.t2online.in/getImageStream/1108/1756883219148.jpg",
    link: "/products",
  },
  {
    id : 5,
    name: "Sony BRAVIA XR",
    description: "Cognitive Processor XR with full-array LED for true realism.",
    price: 189999,
    image: "https://images.unsplash.com/photo-1601944177325-f8867652837f",
    link: "/products",
  },

  {
    id : 6,
    name: "Apple Watch Series 8",
    description: "Advanced health tracking with a premium, minimal display.",
    price: 45999,
    image: "https://bankofelectronics.com/668-medium_default/apple-watch-series-8-gps-45-mm-smart-watch-w-midnight-aluminium-case-with-midnight-sport-band.jpg",
    link: "/products",
  }




];


export default function HomeCard() {
  const wrapperRef = useRef(null)
  const proxyRef = useRef(null)

  useEffect(() => {
    const cards = gsap.utils.toArray(".creative-card")
    const total = cards.length

    const getRadius = () => {
      const w = window.innerWidth
      if (w < 480) return 180
      if (w < 768) return 260
      if (w < 1200) return 380
      return 650
    }

    let radius = getRadius()

    const setDepth = (el) => {
      const rot = gsap.getProperty(el, "rotationY")
      const z = Math.cos((rot * Math.PI) / 180) * 200 + 200
      gsap.set(el, { zIndex: Math.round(z) })
    }

    const spin = gsap.fromTo(
      cards,
      { rotationY: (i) => i * (360 / total) },
      {
        rotationY: "-=360",
        duration: 28,
        ease: "none",
        repeat: -1,
        transformOrigin: `50% 50% ${-radius}px`,
        onUpdate: () => cards.forEach(setDepth),
      }
    )

    const resize = () => {
      radius = getRadius()
      spin.vars.transformOrigin = `50% 50% ${-radius}px`
      spin.invalidate().restart()
    }

    window.addEventListener("resize", resize)

    let start = 0

    Draggable.create(proxyRef.current, {
      trigger: wrapperRef.current,
      type: "x",
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() {
        spin.timeScale(0)
        start = spin.progress()
      },
      onDrag() {
        const p = start + (this.startX - this.x) / 2000
        spin.progress(gsap.utils.wrap(0, 1)(p))
        cards.forEach(setDepth)
      },
      onRelease() {
        gsap.to(spin, { timeScale: 1, duration: 0.8 })
      },
    })

    return () => {
      window.removeEventListener("resize", resize)
      spin.kill()
      Draggable.get(proxyRef.current)?.kill()
    }
  }, [])

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden px-4">

      <h1 className="
            text-4xl md:text-5xl lg:text-6xl  
           text-white
           font-bold
            mb-10
            block
            text-center
          ">
          Explore Our Exclusive Collections
      </h1>

      <div
        ref={wrapperRef}
        className="
          relative
          w-full
          max-w-5xl
          h-[320px]
          md:h-[500px]
          grid
          place-items-center
          [perspective:1600px]
        "
      >
        {cardsData.map((card) => (
          <Link
            to={card.link}
            key={card.id}
            className="
              creative-card
              group
              absolute
              w-[200px] md:w-[320px] lg:w-[420px]
              h-[250px] md:h-[230px] lg:h-[400px]
              rounded-2xl
              overflow-hidden
              bg-gray-800
              border border-indigo-500/30
              shadow-2xl shadow-indigo-600/40
              transition-all duration-700 ease-out
              transform-gpu
              perspective-[1000px]
              hover:scale-[1.02]
              hover:shadow-indigo-500/70
              hover:border-indigo-400
              block
            "
          >

            <img
              src={card.image}
              alt={card.name}
              className="
                w-full h-full object-cover
                transition-transform duration-[1200ms]
                group-hover:scale-[1.05]
                group-hover:rotate-[0.5deg]
                ease-out
              "
            />
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-gray-900/90 via-gray-900/50 to-transparent
                transition-opacity duration-500
              "
            />
            <div
              className="
                absolute bottom-0 left-0 w-full
                px-6 py-5
                flex flex-col gap-2
                transform transition-transform duration-700 ease-out
              "
            >

              <div className="flex items-center justify-between">
                <p
                  className="
                    text-white
                    text-lg md:text-xl
                    font-extrabold
                    tracking-widest
                    uppercase
                    drop-shadow-lg
                  "
                >
                  {card.name}
                </p>
                <span
                  className="
                    text-xs
                    text-white
                    bg-indigo-600
                    px-4 py-1.5
                    rounded-full
                    shadow-lg shadow-indigo-500/50
                    transition-all
                    duration-500
                    opacity-0
                    scale-90
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                >
                  View More
                </span>
              </div>
              <p
                className="
                  text-indigo-200/80
                  text-sm md:text-base
                  leading-relaxed
                  max-h-0
                  overflow-hidden
                  group-hover:max-h-40
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-700 ease-in-out
                "
              >
                {card.description}
              </p>
              <p
                className="
                  text-indigo-400
                  text-xl md:text-2xl
                  font-extrabold
                  mt-2
                "
              >
                ₹{card.price}
              </p>

            </div>
          </Link>
        ))}
      </div>

      <div ref={proxyRef} className="hidden" />
    </section>
  )
}