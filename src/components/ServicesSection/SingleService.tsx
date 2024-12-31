import { ReactNode, useRef } from "react";
import { useTranslation } from "react-i18next";
import useOnScreen from "../../Hooks/useOnScreen";

export function SingleService(props: { mainText: string, secondaryText: string, children: ReactNode, align?: "left" | "right" }) {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={" sm:max-w-[600px] w-full sm:w-2/3 flex flex-col opacity-0 " + (props.align == "right" ? " ml-auto text-end " : "") + ((isVisible && props.align !== "right") && " animate-fade ") + ((isVisible && props.align === "right") && " animate-fade ")}>
            <h1 className=" break-words hyphens-auto text-neutral-600 font-Montserrat font-bold text-4xl sm:text-5xl">
                {props.mainText}
            </h1>
            <p className="py-5 text-neutral-600">
                {props.secondaryText}
            </p>
            <h3 className="pb-2 text-lg font-Poppins font-bold text-gray-200">
                {t("Using technologies like:")}
            </h3>
            <div className={" flex gap-x-3 gap-y-1 flex-wrap " + (props.align == "right" ? " flex-row-reverse " : "")}>
                {props.children}
            </div>
        </div>);
}
