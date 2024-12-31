import { useTranslation } from "react-i18next";
import NavbarLogo from "../Navbar/NavbarLogo";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="text-neutral-300 py-6 pb-12 sm:pb-6 relative z-0">
            <div className="container mx-auto px-10">
                <div className="mx-auto w-max pb-8"><NavbarLogo /></div>
                <div className="absolute inset-0 bg-neutral-900 -z-10"></div>
                <div className="container px-20 mx-auto text-center">
                    <p className="font-Poppins text-sm sm:text-base">
                        &copy; {new Date().getFullYear()} {t("Max")} Zając. {t("All Rights Reserved")}.
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
            </div>
        </footer >
    );
}
