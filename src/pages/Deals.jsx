import React, { Suspense } from 'react'
import { lazy } from 'react';
// import DealCompo from '../components/DealCompo'
import { useEffect } from 'react';
import Loader from '../components/Loader';

const DealCompo = lazy(() => import("../components/DealCompo"))

function Deals() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <DealCompo />
    </Suspense>
  )
}

export default Deals
