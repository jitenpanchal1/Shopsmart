import React, { Suspense, lazy } from 'react'
// import video from '../assets/video/VideoProject.mp4'

const Homethree = lazy(() => import('../components/Homethree'))
const Homeshowcase = lazy(() => import('../components/Homeshowcase'))

function Home() {
  return (
    <div className="relative min-h-screen">

      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dwjmjemn2/video/upload/v1764088791/VideoProject_dxfcxz.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 z-10 bg-gradient-to-b from-[#1E293B]/90 via-[#1E293B]/80 to-[#1E293B]/90" />
      <div className="relative z-20 min-h-screen">
        <Suspense fallback={null}>
          <Homethree />
        </Suspense>

        <section className="z-20">
          <Suspense fallback={null}>
            {/* <Homeshowcase /> */}
          </Suspense>
        </section>
      </div>

    </div>
  )
}

export default Home