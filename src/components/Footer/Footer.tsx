import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (<footer className="bg-neutral-900 text-neutral-300 py-6 pb-12 sm:pb-6">
        <div className="container mx-auto text-center">
            <p className="font-Poppins text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Maksymilian Zając. {t("All Rights Reserved")}.
            </p>
        </div>
    </footer>);
}
