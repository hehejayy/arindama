import HeroSection from "./hero section";
import Navbar from '../Components/Navbar'
import AboutUs from "./about us";
import WhyChooseUs from "./why choose us";
import ShopNowCard from "./shop now";
import Footer from '../Components/footer'

export default function AboutUsPage() {
  return (
    <div>
      <Navbar/> 
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <ShopNowCard />
      <Footer />
    </div>
  );
}