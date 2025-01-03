import { useTranslation } from "react-i18next";
import SectionHeaderText from "../UI/SectionHeaderText";
import ContactForm from "./ContactForm";


export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <section id="section5" className="px-12 pt-32 pb-20 overflow-x-hidden z-20">
            <div className="max-w-[900px] mx-auto pb-10 relative z-20 rounded-lg overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-neutral-500 dark:bg-neutral-950 opacity-70 -z-10"></div>

                {/* main content */}
                <div className="p-2 sm:p-6">
                    <SectionHeaderText
                        mainText={t("Contact")}
                        secondaryText={t("I can make these for you:")}
                    />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}