import { useRef } from "react";
import useOnScreen from "../../Hooks/useOnScreen";

export default function SectionHeaderText(props: { mainText: string, secondaryText: string, align?: "left" | "right" }) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <h1 ref={ref} className={" overflow-hidden relative " + (props.align == "right" ? " w-max ml-auto " : "")}>
            <span className={" font-BebasNeue text-neutral-700 text-[5.5rem] sm:text-9xl md:text-[190px] font-bold " + (isVisible && " animate-fade animate-delay-200 ")}>
                {props.mainText}
            </span>
            <p className={" absolute top-1/2 text-end sm:text-start left-7 sm:left-20 font-Poppins text-sm sm:text-xl md:text-3xl -translate-y-2/3 text-white " + ((isVisible && props.align != "right") && " animate-slideInFromLeftYTranslate ") + ((isVisible && props.align == "right") && " animate-slideInFromRightYTranslate ")}>
                {props.secondaryText}
            </p>
        </h1>
    );
}
