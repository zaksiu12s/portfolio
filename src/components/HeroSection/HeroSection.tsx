import { HeroSectionCTA } from "../UI/HeroSectionCTA";
import { useTranslation } from "react-i18next";
import { HorizontalLines } from "./HorizontalLines";

export default function HeroSection() {
    const { t } = useTranslation();

    return (<section id="section1" className="flex items-center min-h-[50vh] pt-40 p-12 sm:p-20 sm:pt-48">
        <div className="relative container mx-auto">
            <div className="text-gray-50">
                <p className="text-2xl text-blue-500 dark:text-orange-600 font-roboto animate-fade">
                    {t("Hi, my name is:")}
                </p>
                <h1 className="text-7xl sm:text-8xl font-bold font-Montserrat animate-fade">
                    Max Zając.
                </h1>
                <h2 className="pt-2 text-5xl sm:text-6xl font-Poppins text-gray-600 dark:text-gray-400 animate-fade">
                    {t("I build websites and apps")}
                </h2>
                <p className="text-left font-Roboto text-gray-600 dark:text-gray-500 py-4 sm:py-10 w-full md:w-2/3 lg:w-1/2 animate-fade">
                    {t("HeroAbout")}
                </p>

                {/* Get In Touch Button */}
                <HeroSectionCTA href="section5" />

                {/* horizontal lines */}
                <HorizontalLines />
            </div>
        </div>
    </section>);
}