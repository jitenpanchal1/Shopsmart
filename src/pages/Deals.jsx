import React from 'react'
import DealCompo from '../components/DealCompo'
import { useEffect } from 'react';

function Deals() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <DealCompo />
  )
}

export default Deals
