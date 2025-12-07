import React, { Suspense, lazy } from 'react'
import Loader from '../components/Loader'

const Homethree = lazy(() => import('../components/Homethree'))
const HomeCard = lazy(() => import('../../components/HomeCard'))

function Home() {
  return (
    <div className="relative min-h-screen">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dwjmjemn2/video/upload/v1764088791/VideoProject_dxfcxz.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-[#1E293B]/90 via-[#1E293B]/80 to-[#1E293B]/90 pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-20">
        <Suspense fallback={<Loader />}>
          <Homethree />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <HomeCard />
        </Suspense>

      </div>

    </div>
  )
}

export default Home
