import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useOnScreen from "../../Hooks/useOnScreen";

export function HeroSectionCTA({ text = "Get In Touch", href, htmlHref }: { text?: string; href?: string, htmlHref?: string }) {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (href) {
            const targetId = href;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    return (
        <>
            {htmlHref ? <a aria-label={t(text)} href={htmlHref} ref={ref} type="button" className={" animate-fade z-10 relative border-blue-500 dark:border-orange-600 group rounded-sm transition-all border-2 px-3 py-2 font-bold font-Montserrat " + (isVisible && " animate-fade ")}>
                <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-blue-500 dark:bg-orange-600 transition-all -z-10"></div>
                <span className="z-50">{t(text)}</span>
            </a> :
                <button aria-label={t(text)} onClick={handleClick} ref={ref} type="button" className={" animate-fade z-10 relative border-blue-500 dark:border-orange-600 group rounded-sm transition-all border-2 px-3 py-2 font-bold font-Montserrat " + (isVisible && " animate-fade ")}>
                    <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-blue-500 dark:bg-orange-600 transition-all -z-10"></div>
                    <span className="z-50">{t(text)}</span>
                </button>}
        </>
    );
}
