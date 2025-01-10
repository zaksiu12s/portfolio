import i18n from "../hooks/18n";

export const handleLanguageChange = (lang: string) => {
    localStorage.setItem("userLang", lang);
    i18n.changeLanguage(lang);
};
