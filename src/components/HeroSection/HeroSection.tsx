import { HeroSectionCTA } from "../UI/HeroSectionCTA";
import { useTranslation } from "react-i18next";
import { HorizontalLines } from "./HorizontalLines";
import TypewriterComponent from "typewriter-effect";
import Container from "../Container";


function AuthorName() {
    return (<h1 className="text-7xl sm:text-8xl font-bold font-Montserrat animate-fade">
        Max Zając.
    </h1>);
}



function MyNameIsText() {
    const { t } = useTranslation();

    return (<p className="text-2xl text-accent font-roboto animate-fade">
        {t("Hi, my name is:")}
    </p>);
}



function WhatIDoText() {
    const { t } = useTranslation();

    return (<h2 className="flex flex-col lg:block break-words pt-2 text-5xl sm:text-6xl font-Poppins text-gray-600 dark:text-gray-400 animate-fade">
        {t("I build")}&nbsp;
        <span className="font-bold h-[150px] sm:h-[100px]">
            <TypewriterComponent component={"span"} options={{
                strings: [t("websites."), t("apps."), t("experiences.")],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75
            }} />
        </span>
    </h2>);
}



function HeroAbout() {
    const { t } = useTranslation();

    return (<p className="text-left font-Roboto text-gray-600 dark:text-gray-500 py-4 sm:py-10 w-full md:w-2/3 lg:w-1/2 animate-fade">
        {t("HeroAbout")}
    </p>);
}


export default function HeroSection() {
    return (
        <section id="section1" className="flex items-center min-h-[75vh] pt-40 p-12 sm:p-20 sm:pt-48 text-gray-50">
            <Container relative={true}>
                <MyNameIsText />
                <AuthorName />
                <WhatIDoText />
                <HeroAbout />
                <HeroSectionCTA href="section5" />

                <HorizontalLines />
            </Container>
        </section >
    );
}