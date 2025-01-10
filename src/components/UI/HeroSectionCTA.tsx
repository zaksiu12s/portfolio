import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useOnScreen from "../../hooks/useOnScreen";

export function HeroSectionCTA({ text = "Get In Touch", href, htmlHref, bgFill = false, onClick }: {
    text?: string;
    href?: string,
    htmlHref?: string;
    bgFill?: boolean;
    onClick?: () => void;
}) {
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
            {htmlHref ? <a aria-label={t(text)} href={htmlHref} ref={ref} type="button" className={" animate-fade z-10 relative border-accent group rounded-sm transition-all border-2 px-3 py-2 font-bold font-Montserrat " + (isVisible && " animate-fade ") + (bgFill && " bg-accent ")}>
                <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-accent transition-all -z-10"></div>
                <span className="z-50">{t(text)}</span>
            </a> :
                <button aria-label={t(text)} onClick={href ? handleClick : onClick} ref={ref} type="button" className={" animate-fade z-10 relative border-accent group rounded-sm transition-all border-2 px-3 py-2 font-bold font-Montserrat " + (isVisible && " animate-fade ") + (bgFill && " bg-accent ")}>
                    <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-accent transition-all -z-10"></div>
                    <span className="z-50">{t(text)}</span>
                </button>}
        </>
    );
}
