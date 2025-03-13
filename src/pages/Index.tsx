
import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import SponsorsSection from "../components/SponsorsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* <main className="overflow-hidden"> */}
      <Navbar />
        <Hero />
        <AboutSection />
        <TimelineSection />
        <SponsorsSection />
      {/* </main> */}
      <Footer />
    </>
  );
};

export default Index;
