<<<<<<< HEAD
import React from 'react';
import Navbar from './Components/Navbar';
import Courasel from './Components/ImageSlider';
import Card from './Components/card';
import AboutUs from './Components/AboutUs';

=======
import React from 'react'
import Navbar from './Components/Navbar'
import Courasel from './Components/ImageSlider'
import Card from './Components/card'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/footer'
>>>>>>> f696edbfe8fccf614450e874a357cdb052b84892
export default function Home() {
  return (
    <main className='bg-background'>
      <Navbar />
      <Courasel />
      <AboutUs />
<<<<<<< HEAD
      <Card />
    </main>
=======
      <Card/>
      <ContactUs/>
      <Footer/>
      </main>
>>>>>>> f696edbfe8fccf614450e874a357cdb052b84892
  );
}
