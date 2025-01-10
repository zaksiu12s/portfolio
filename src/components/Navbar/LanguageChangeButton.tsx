import { useState } from "react";
import i18n from "../../hooks/18n";
import { handleLanguageChange } from "../../helpers/handleLanguageChange";

export default function LanguageChangeButton() {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    return (<div className="flex flex-col">
        <button type="button" className={" text-neutral-600 dark:text-gray-300 dark:hover:text-white font-Montserrat " + (currentLanguage == "pl" && " text-neutral-700 dark:text-neutral-100 font-bold ")} onClick={() => {
            handleLanguageChange("pl");
            setCurrentLanguage(i18n.language);
        }}>PL</button>
        <button type="button" className={" text-neutral-600 dark:text-gray-300 dark:hover:text-white font-Montserrat " + (currentLanguage == "en" && " text-neutral-700 dark:text-neutral-100 font-bold ")} onClick={() => {
            handleLanguageChange("en");
            setCurrentLanguage(i18n.language);
        }}>EN</button>
    </div>);
}