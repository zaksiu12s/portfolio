import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HorizontalInfoBar from "../components/HorizontalBars/HorizontalInfoBar";
import HorizontalLinksBar from "../components/HorizontalBars/HorizontalLinksBar";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import CookieAccept from "../components/Poppups/CookieAccept";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    const [isManageCookiesVisible, setIsManageCookiesVisible] = useState(false);
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
        <>
            <Helmet>
                <title>{isScrolled ? "zaaksiu." : "zaaksiu"} - {t("Privacy Policy")}</title>
            </Helmet>

            <Navbar loadMainPage={true} isScrolled={isScrolled} isMenuVisible={isMenuVisible} handleMenuClick={handleMenuClick} showMenuItems={false} />
            <HorizontalInfoBar isScrolled={isScrolled} />
            <HorizontalLinksBar />
            <div className="px-10 text-white pt-32 max-w-max mx-auto">
                <h1 className="text-5xl break-words sm:text-7xl font-bold font-Montserrat pb-10 text-blue-500 dark:text-neutral-400">
                    {t("Privacy Policy")}
                </h1>

                <section id="introduction" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("1. Introduction")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("This Privacy Policy explains how we collect, use, and protect your personal information when you visit or use our website. By using our website, you consent to the collection and use of your information as outlined in this policy.")}
                    </p>
                </section>

                <section id="data-collection" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("2. Data Collection")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We collect personal data when you visit our website, such as your name, email address, and IP address. This data is used to improve our services, communicate with you, and ensure the proper functioning of the website.")}
                    </p>
                </section>

                <section id="use-of-data" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("3. Use of Data")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("Your personal data may be used for the following purposes: providing and improving our services, responding to your inquiries, sending updates or promotional materials (if you opt-in), and ensuring compliance with legal obligations.")}
                    </p>
                </section>

                <section id="data-sharing" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("4. Data Sharing")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We do not share your personal data with third parties, except as necessary for the operation of our website or as required by law. We may use third-party services for hosting, analytics, or marketing purposes.")}
                    </p>
                </section>

                <section id="data-security" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("5. Data Security")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We take reasonable steps to protect your personal data from unauthorized access or disclosure. However, please note that no method of transmission over the internet is completely secure.")}
                    </p>
                </section>

                <section id="data-retention" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("6. Data Retention")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. After that, your data will be securely deleted or anonymized.")}
                    </p>
                </section>

                <section id="your-rights" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("7. Your Rights")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("You have the right to access, correct, or delete your personal data at any time. If you wish to exercise any of these rights, please contact us using the contact information provided below.")}
                    </p>
                </section>

                <section id="cookies" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("8. Cookies and Tracking Technologies")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We use cookies and other tracking technologies to enhance your experience on our website. You can control the use of cookies through your browser settings, but please note that some features may not function properly if you disable cookies.")}
                    </p>
                </section>

                <section id="third-party-links" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("9. Third-Party Links")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites, and we encourage you to read their privacy policies.")}
                    </p>
                </section>

                <section id="changes-to-policy" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("10. Changes to Privacy Policy")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("We may update this Privacy Policy from time to time. Any changes will be posted here, and the date of the most recent revision will be updated accordingly. We encourage you to review this policy regularly.")}
                    </p>
                </section>

                <section id="contact-us" className="pb-12 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4">{t("11. Contact Us")}</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed">
                        {t("If you have any questions or concerns about this Privacy Policy, please contact us through our contact form or via email.")}
                    </p>
                </section>

                <p className="text-center pb-12 text-neutral-400 underline cursor-pointer" onClick={() => { setIsManageCookiesVisible(true) }}>
                    {t("Manage your cookies.")}
                </p>
            </div>

            <CookieAccept show={isManageCookiesVisible} hide={setIsManageCookiesVisible} />
            <Footer />
        </>
    );
}
