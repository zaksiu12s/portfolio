import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="text-neutral-300 py-6 pb-12 sm:pb-6 relative z-0">
            <div className="absolute inset-0 bg-neutral-900 -z-10"></div>
            <div className="container px-20 mx-auto text-center">
                <p className="font-Poppins text-sm sm:text-base">
                    &copy; {new Date().getFullYear()} Maksymilian Zając. {t("All Rights Reserved")}.
                </p>
            </div>
        </footer>
    );
}
