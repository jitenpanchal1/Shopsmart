import React from 'react'
import ContactCompo from '../components/ContactCompo'
import { useEffect } from 'react';

function Contact() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <ContactCompo />
  )
}

export default Contact



