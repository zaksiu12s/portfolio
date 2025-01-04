import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HeroSectionCTA } from "../UI/HeroSectionCTA";

export default function CookieAccept(props: {
    show?: boolean, hide?: Dispatch<SetStateAction<boolean>>
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (hasConsented === undefined || hasConsented === null) {
            setIsVisible(true);
        }
    }, []);

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);

        if (props.hide) {
            props.hide(false);
        }
    };

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);

        if (props.hide) {
            props.hide(false);
        }
    };


    return (
        <>
            {(isVisible || props.show) && <div className={"animate-slideInFromBottom fixed z-50 bottom-0 sm:bottom-12 sm:right-12 p-4 bg-neutral-950 text-white shadow-lg max-w-[400px] shadow-neutral-950 " + (isVisible && " animate-delay-1000 ")}>
                <h1 className="text-xl font-bold font-Montserrat mb-2">I value your privacy</h1>
                <p className="mb-4 text-sm font-Roboto">
                    We use cookies to ensure you get the best experience on our website. By
                    accepting, you agree to our use of cookies.{" "}
                    <span className="cursor-pointer decoration-inherit underline">
                        <a href="/privacy-policy">
                            Privacy Policy
                        </a>
                    </span>
                </p>

                <div className="flex justify-center gap-2 flex-wrap">
                    <HeroSectionCTA text="Reject All" onClick={handleRejectCookies} />
                    <HeroSectionCTA text="Accept Cookies" bgFill={true} onClick={handleAcceptCookies} />
                </div>
            </div>}
        </>
    )
}