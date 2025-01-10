import { ReactNode, useRef } from "react";
import { useTranslation } from "react-i18next";
import useOnScreen from "../../hooks/useOnScreen";

export function ProjectCard(props: { mainText: string; secondaryText: string; src: string; alt: string; link: string; children?: ReactNode; linkWebsite?: string; }) {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (<div ref={ref} className={" opacity-0 w-[400px] bg-neutral-800 rounded-sm shadow-neutral-900 shadow-lg " + (isVisible && " animate-fade ")}>
        <div className="relative">
            <img alt={props.alt} src={props.src} className="text-white" />
            <h1 className="absolute bottom-0 left-0 w-min text-white font-bold font-Poppins text-3xl p-2">{props.mainText}</h1>
        </div>
        <div className="p-2 text-neutral-300">
            <p>{props.secondaryText}</p>
            <div className="flex gap-x-3 gap-y-1 flex-wrap my-3">
                {props.children}
            </div>
            <a href={props.link} className="font-bold" target="_blank" rel="noopener noreferrer">{t("View")} {props.linkWebsite && `${t("on")} ${props.linkWebsite}`}</a>
        </div>
    </div>);
}
