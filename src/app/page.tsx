import React from 'react'
import Navbar from './Components/Navbar'
import Courasel from './Components/ImageSlider'
import Card from './Components/card'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/footer'
export default function Home() {
  return (
    <main className='bg-background'>
      <Navbar/>
      <Courasel/>
      <AboutUs />
      <Card/>
      <ContactUs/>
      <Footer/>
      </main>
  );
}
