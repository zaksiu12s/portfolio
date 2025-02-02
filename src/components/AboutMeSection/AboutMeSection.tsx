import { useTranslation } from "react-i18next";
import Camera from "../../assets/icons/Camera";
import Monitor from "../../assets/icons/Monitor";
import Telescope from "../../assets/icons/Telescope";
import WiFi from "../../assets/icons/WiFi";
import SectionHeaderText from "../UI/SectionHeaderText";
import { AboutMeSectionSkill } from "./AboutMeSectionSkill";
import Container from "../Container";

export default function AboutMeSection() {
    const { t } = useTranslation();

    return (
        <section id="section2" className="px-12 py-32 overflow-x-hidden">
            <Container>
                <SectionHeaderText
                    mainText={t("About Me")}
                    secondaryText={t("What do I do and what are my hobbies:")}
                />

                <p className="md:w-1/2 text-neutral-600">
                    {t("AboutMeAbout")}
                </p>

                <div className="mx-auto p-0 sm:mx-0 sm:ml-auto w-max flex-wrap flex gap-3 sm:gap-5 md:gap-7 lg:gap-10 sm:mr-10 py-5 mt-10 text-neutral-500 border-t-4 border-b-4 sm:px-20 border-t-neutral-700 border-b-neutral-700">
                    {/* camera */}
                    <AboutMeSectionSkill>
                        <div className="hover:text-green-500" aria-label={t("Camera")}>
                            <Camera />
                        </div>
                    </AboutMeSectionSkill>

                    {/* telescope */}
                    <AboutMeSectionSkill>
                        <div className="hover:text-purple-500" aria-label={t("Telescope")}>
                            <Telescope />
                        </div>
                    </AboutMeSectionSkill>

                    {/* monitor */}
                    <AboutMeSectionSkill>
                        <div className="hover:text-white" aria-label={t("Monitor")}>
                            <Monitor />
                        </div>
                    </AboutMeSectionSkill>

                    {/* WiFi */}
                    <AboutMeSectionSkill>
                        <div className="hover:text-blue-500" aria-label={t("WiFi")}>
                            <WiFi />
                        </div>
                    </AboutMeSectionSkill>
                </div>
            </Container>
        </section>);
}