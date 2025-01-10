import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HorizontalInfoBar from "../components/HorizontalBars/HorizontalInfoBar";
import HorizontalLinksBar from "../components/HorizontalBars/HorizontalLinksBar";
import { HeroSectionCTA } from "../components/UI/HeroSectionCTA";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function NotFound() {
    const { t } = useTranslation();

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
            <title>zaaksiu - {t("404")}</title>
        </Helmet>

        <Navbar isScrolled={isScrolled} isMenuVisible={isMenuVisible} handleMenuClick={handleMenuClick} showMenuItems={false} />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-Montserrat font-bold text-blue-500 dark:text-orange-600 animate-fade">404</h1>
            <p className="text-4xl text-white font-Roboto animate-fade animate-delay-300 text-center px-16 break-words">{t("Oops! This page does not exist.")}</p>
            <div className="mt-5 text-white text-xl animate-fade animate-delay-500"><HeroSectionCTA text={t("Go home")} htmlHref="/" /></div>
        </div>
        <HorizontalInfoBar isScrolled={isScrolled} />
        <HorizontalLinksBar />
    </>
}