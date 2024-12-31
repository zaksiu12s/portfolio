import { useState } from "react";
import SectionHeaderText from "../UI/SectionHeaderText";
import TechnologyIcon from "../UI/TechnologyIcon";
import { SingleService } from "./SingleService";
import { Service } from "./Service";
import services from "../../assets/data/services";
import { HeroSectionCTA } from "../UI/HeroSectionCTA";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
    const { t } = useTranslation();

    const [servicesArray] = useState<Service[]>(services);

    return (<section id="section3" className="px-12 py-32 overflow-x-hidden">
        <div className="container mx-auto">
            <SectionHeaderText
                mainText={t("Services")}
                secondaryText={t("What can I do for you:")}
                align="right"
            />
            <p className="mb-20 text-neutral-600 font-Poppins text-end w-1/2 ml-auto">
                {t("I offer a variety of services to help you create beautiful and functional websites and applications.")}
            </p>
            <div className="flex flex-wrap flex-col gap-20 overflow-hidden">
                {/* Custom Website Development */}
                {servicesArray.map((service, index) => {
                    return <SingleService
                        mainText={`${index + 1}. ${t(service.mainText)}`}
                        secondaryText={t(service.secondaryText)}
                        align={index % 2 == 0 ? "left" : "right"}
                        key={index}
                    >
                        {service.icons.map((icon, index) =>
                            <TechnologyIcon
                                src={icon.src}
                                alt={icon.alt}
                                key={index}
                            />
                        )}
                    </SingleService>
                }
                )}
            </div>
        </div >

        <div className="mx-auto w-max my-10 text-white">
            <HeroSectionCTA href="section5" />
        </div>
    </section >);
}