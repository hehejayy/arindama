import React from 'react'
import Navbar from './Components/Navbar'
import Courasel from './Components/ImageSlider'

import AboutUs from './Components/AboutUs'
export default function Home() {
  return (
    <main className='bg-background'>
      <Navbar/>
      <Courasel/>
      <AboutUs />
      </main>
  );
}
