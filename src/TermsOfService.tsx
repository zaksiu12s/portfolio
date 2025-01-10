import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HorizontalInfoBar from "./components/HorizontalBars/HorizontalInfoBar";
import HorizontalLinksBar from "./components/HorizontalBars/HorizontalLinksBar";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
import CookieAccept from "./components/Poppups/CookieAccept";

export default function TermsOfService() {
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
            <title>{isScrolled ? "zaaksiu." : "zaaksiu"} - {t("Terms of Service")}</title>
        </Helmet>

        <Navbar loadMainPage={true} isScrolled={isScrolled} isMenuVisible={isMenuVisible} handleMenuClick={handleMenuClick} showMenuItems={false} />
        <HorizontalInfoBar isScrolled={isScrolled} />
        <HorizontalLinksBar />
        <div className="px-10 text-white pt-32 max-w-max mx-auto">
            <h1 className="text-7xl font-bold font-Montserrat pb-10 text-blue-500 dark:text-neutral-400">{t("Terms of Service")}</h1>
            <section id="introduction" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("1. Introduction")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("By accessing and using our website, you agree to these Terms of Service. If you do not agree with these terms, please do not use our website.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("These terms apply to all visitors, users, and others who access or use the service. We reserve the right to change these terms at any time, and such changes will be effective immediately upon posting.")}
                </p>
            </section>

            <section id="changes" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("2. Changes to Terms")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("We may update these Terms of Service periodically. The updated terms will be posted here with the date of the most recent revision. We encourage you to review these terms regularly.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("Your continued use of the website after any such changes will constitute your acceptance of the updated terms.")}
                </p>
            </section>

            <section id="responsibilities" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("3. User Responsibilities")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately if you believe your account has been compromised.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("You must provide accurate and up-to-date information when using our services. You are also responsible for all activities that occur under your account.")}
                </p>
            </section>

            <section id="payment" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("4. Payments and Fees")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("If you are subscribing to paid services, you agree to pay all applicable fees as outlined in the payment section. All payments must be made using the approved methods on our website.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("You are responsible for paying any taxes that apply to your subscription. If a payment is not received or is declined, we reserve the right to suspend or terminate your access to our services.")}
                </p>
            </section>

            <section id="termination" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("5. Termination")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("We reserve the right to suspend or terminate your access to the site if you violate these Terms of Service or engage in any illegal or harmful activity.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("Upon termination, you must immediately cease all use of the website and services. We may also retain any information we are legally required to keep, even after account termination.")}
                </p>
            </section>

            <section id="governing-law" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("6. Governing Law")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("These Terms of Service shall be governed by the laws of Poland. Any disputes arising from these terms shall be resolved in the appropriate courts located in Poland.")}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed mt-4">
                    {t("By using this website, you consent to the jurisdiction and venue of such courts. If any provision of these terms is deemed invalid, the remaining provisions will continue to be in full force and effect.")}
                </p>
            </section>

            <section id="privacy" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("7. Privacy and Data Protection")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("We respect your privacy and protect your personal data according to our Privacy Policy. All data collected through our website is processed in compliance with applicable data protection laws.")}
                </p>
            </section>

            <section id="limitations" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("8. Limitation of Liability")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed break-words">
                    {t("We are not responsible for any losses, damages, or interruptions of service caused by external factors such as system failures, technical issues, or force majeure events.")}
                </p>
            </section>

            <section id="intellectual-property" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("9. Intellectual Property Rights")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("All content on our website, including texts, images, videos, and software, is protected by copyright and intellectual property laws. You may not use or reproduce any of these materials without our explicit permission.")}
                </p>
            </section>

            <section id="reporting" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("10. Reporting Violations")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("If you believe any part of our website or service violates these Terms, please promptly inform us through our contact form or via email.")}
                </p>
            </section>

            <section id="warranty" className="pb-12 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("11. No Warranty")}</h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                    {t("Our services are provided 'as is', and we make no warranties, express or implied, regarding their availability, accuracy, security, or performance.")}
                </p>
            </section>
        </div>

        <CookieAccept />
        <Footer />
    </>
}