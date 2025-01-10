import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import HorizontalLinksBar from "../components/HorizontalBars/HorizontalLinksBar";
import HorizontalInfoBar from "../components/HorizontalBars/HorizontalInfoBar";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ParticleBackground from "../components/Particles/ParticleBackground";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CookieAccept from "../components/Poppups/CookieAccept";

export default function Home() {
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

    return <>
        <Helmet>
            <title>{isScrolled ? "zaaksiu." : "zaaksiu"}</title>
        </Helmet>

        <ParticleBackground />

        <Navbar
            isScrolled={isScrolled}
            isMenuVisible={isMenuVisible}
            handleMenuClick={handleMenuClick}
        />

        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />

        {/* horizontal bars */}
        <HorizontalLinksBar />
        <HorizontalInfoBar isScrolled={isScrolled} />

        <CookieAccept />
        <ProgressBar />
    </>
}