import UpArrow from "../../assets/icons/UpArrow";
import handleScrollToTop from "../../helpers/handleScrollToTop";

export default function HorizontalInfoBar(props: {
    isScrolled: boolean,
}) {
    return (<div className="fixed right-0 bottom-0 px-2">
        <div className="flex items-end">
            <div className="text-gray-50 flex flex-col items-center justify-end text-sm  font-Poppins gap-5">
                <h1 className="[writing-mode:vertical-rl] hover:text-white hidden sm:block">
                    {window.location.href.replace("http", "").replace("https", "").replace("://", "")}
                </h1>
                <div className={" w-8 h-8 border-2 p-0.5 mb-2 text-gray-50 cursor-pointer " + (!props.isScrolled && " hidden ")} onClick={handleScrollToTop}>
                    <div className="hover:scale-[120%] transition-all">
                        <UpArrow />
                    </div>
                </div>
                {
                    /* vertical line */
                }
                <div className={" w-[2px] bg-gray-200 dark:bg-gray-300 h-16 hidden sm:block " + (props.isScrolled && " sm:hidden ")}></div>
            </div>
        </div>
    </div>);
}