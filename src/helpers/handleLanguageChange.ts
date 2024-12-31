import i18n from "../18n";

export const handleLanguageChange = (lang: string) => {
    localStorage.setItem("userLang", lang);
    i18n.changeLanguage(lang);
};
