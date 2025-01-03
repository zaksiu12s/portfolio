import { useTranslation } from "react-i18next";
import NavbarLogo from "../Navbar/NavbarLogo";
import Container from "../Container";
import Github from "../../assets/icons/Github";
import LinkedIn from "../../assets/icons/LinkedIn";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="text-neutral-300 py-6 pb-12 sm:pb-6 relative z-0">
            <Container>
                <div className="px-10">
                    <div className="mx-auto w-max pb-8"><NavbarLogo /></div>
                    <div className="absolute inset-0 bg-neutral-900 -z-10"></div>
                    <div className="container px-20 mx-auto text-center">
                        <p className="font-Poppins text-sm sm:text-base">
                            &copy; 2024 - {new Date().getFullYear()} {t("Max")} Zając. {t("All Rights Reserved")}.
                        </p>
                    </div>
                    <div className="mt-4 mx-auto w-max">
                        <a href="/privacy-policy" className="text-sm">
                            {t("Privacy Policy")}
                        </a>
                        <span className="mx-2">|</span>
                        <a href="/terms-of-service" className="text-sm">
                            {t("Terms of Service")}
                        </a>
                    </div>
                    <div className="flex sm:hidden justify-center pt-4 gap-5">
                        <a title="My Github Profile" href="https://github.com/zaksiu12s" className="w-6 h-6 rounded-full hover:bg-white cursor-pointer bg-gray-300 text-neutral-800 flex justify-center items-end">
                            <div className="w-5 h-5 text-neutral-700 dark:text-neutral-800">
                                <Github />
                            </div>
                        </a>

                        <a title="My LinkedIn Profile" href="https://pl.linkedin.com/zaksiu12s" className="w-6 h-6 cursor-pointer hover:text-blue-400">
                            <LinkedIn />
                        </a>

                        <a title="My Facebook Profile" href="https://www.facebook.com/maksymilian.zajac.3" className="w-6 h-6 cursor-pointer hover:text-blue-500">
                            <Facebook />
                        </a>

                        <a title="My Instagram Profile" href="https://www.instagram.com/zaksiu12s/" className="w-6 h-6 cursor-pointer hover:text-red-400">
                            <Instagram />
                        </a></div>
                </div>
            </Container>
        </footer >
    );
}
