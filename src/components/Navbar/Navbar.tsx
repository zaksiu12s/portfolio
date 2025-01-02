import Sun from "../../assets/icons/Sun";
import useTheme from "../../Hooks/useTheme";
import Container from "../Container";
import LanguageChangeButton from "./LanguageChangeButton";
import { NavbarButton } from "./NavbarButton";
import { NavbarLink } from "./NavbarLink";
import { NavbarLinkContainer } from "./NavbarLinkContainer";
import NavbarLogo from "./NavbarLogo";
import { NavbarProps } from "./NavbarProps";
import { useTranslation } from "react-i18next";

export default function Navbar({ isScrolled,
    isMenuVisible,
    handleMenuClick,
    showMenuItems = true }: NavbarProps) {
    const { t } = useTranslation();
    const { theme, setTheme } = useTheme();

    return (
        <nav className={" animate-fade fixed w-full text-neutral-700 dark:text-white font-Poppins py-10 px-8 sm:px-16 top-0 left-0 z-40 transition-all " + (isScrolled && " bg-neutral-300 dark:bg-neutral-900 py-4 sm:px-20 ")}>
            <Container>
                <div className="flex justify-between items-center gap-10">
                    <NavbarLogo goHome={!isScrolled} />

                    {
                        /* desktop */
                    }

                    <NavbarLinkContainer>
                        {showMenuItems && <><NavbarLink text={t("About Me")} href="section2" />
                            <NavbarLink text={t("Services")} href="section3" />
                            <NavbarLink text={t("Projects")} href="section4" />
                            <NavbarButton text={t("Contact")} href="section5" /></>}
                        <LanguageChangeButton />
                        <div className="w-6 cursor-pointer hover:fill-neutral-950 hover:text-neutral-950 fill-neutral-700 text-neutral-700 dark:text-gray-300 dark:fill-transparent dark:hover:text-white"
                            onClick={() => {
                                setTheme(theme == "dark" ? "light" : "dark");
                            }}>
                            <Sun />
                        </div>
                    </NavbarLinkContainer>

                    {
                        /* mobile */
                    }
                    <div className="flex gap-2 flex-row-reverse items-center sm:hidden">
                        {showMenuItems && <div className="h-10 w-10 sm:hidden">
                            <div className={" -z-20 fixed inset-0 backdrop-blur-lg bg-black/30 animate-fade animate-duration-75 " + (isMenuVisible ? " block " : " hidden ")}></div>
                            <div className={" -z-10 flex-col justify-center items-center fixed left-0 top-0 w-full h-full text-4xl gap-5 font-Roboto text-white font-bold tracking-widest " + (isMenuVisible ? " flex " : " hidden ")}>
                                <div onClick={handleMenuClick}><NavbarLink text={t("About Me")} href="section2" /></div>
                                <div onClick={handleMenuClick}><NavbarLink text={t("Services")} href="section3" /></div>
                                <div onClick={handleMenuClick}><NavbarLink text={t("Projects")} href="section4" /></div>
                                <div onClick={handleMenuClick}><NavbarButton text={t("Contact")} href="section5" /></div>
                            </div>
                            <button title="Open menu button" type="button" className=" text-gray-300 h-10 w-[37px] group flex flex-col justify-center gap-2.5 hover:text-white" onClick={handleMenuClick}>
                                <div className={" w-full h-[3px] bg-neutral-600 group-hover:bg-neutral-800 dark:bg-gray-300 dark:group-hover:bg-white transition-all " + (isMenuVisible && " rotate-45 origin-left ")}></div>
                                <div className={" w-3/4 self-end mr-px h-[3px] bg-neutral-600 group-hover:bg-neutral-800 dark:bg-gray-300 dark:group-hover:bg-white transition-all " + (isMenuVisible && " rotate-45 opacity-0 ")}></div>
                                <div className={" w-full h-[3px] bg-neutral-600 dark:bg-gray-300 group-hover:bg-neutral-800 dark:group-hover:bg-white  transition-all " + (isMenuVisible && " -rotate-45 origin-left ")}></div>
                            </button>
                        </div>}
                        <LanguageChangeButton />
                        <div className="w-6 cursor-pointer hover:fill-neutral-950 hover:text-neutral-950 fill-neutral-700 text-neutral-700 dark:text-gray-300 dark:fill-transparent dark:hover:text-white"
                            onClick={() => {
                                setTheme(theme == "dark" ? "light" : "dark");
                            }}>
                            <Sun />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>);
}