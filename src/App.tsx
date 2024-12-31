import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import HorizontalLinksBar from "./components/HorizontalBars/HorizontalLinksBar";
import HorizontalInfoBar from "./components/HorizontalBars/HorizontalInfoBar";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ParticleBackground from "./components/Particles/ParticleBackground";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[200vh] dark:from-neutral-800 dark:to-neutral-900 from-neutral-300 to-neutral-400 bg-gradient-to-bl scroll-smooth">
      {/* navigation */}
      <ParticleBackground />

      <Navbar
        isScrolled={isScrolled}
        isMenuVisible={isMenuVisible}
        handleMenuClick={handleMenuClick}
      />

      {/* hero section */}
      <HeroSection />

      {/* about me section */}
      <AboutMeSection />

      {/* services */}
      <ServicesSection />

      {/* projects */}
      <ProjectsSection />

      {/* contact form */}
      <ContactSection />

      {/* footer */}
      <Footer />

      {/* horizontal bars */}
      <HorizontalLinksBar />
      <HorizontalInfoBar isScrolled={isScrolled} />

      <ProgressBar />
    </div>
  );
};

export default App;
