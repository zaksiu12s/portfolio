import Github from "../../assets/icons/Github";
import LinkedIn from "../../assets/icons/LinkedIn";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";

export default function HorizontalLinksBar() {
    return (<div className="fixed left-0 bottom-0 px-2">
        <div className="flex justify-between">
            <div className="text-gray-300 flex flex-col items-center gap-5 justify-end">
                <a title="My Github Profile" href="https://github.com/zaksiu12s" className="w-6 h-6 rounded-full hover:bg-white cursor-pointer bg-gray-300 text-neutral-800 flex justify-center items-end">
                    <div className="w-5 h-5">
                        <Github />
                    </div>
                </a>

                <a title="My LinkedIn Profile" href="https://pl.linkedin.com/zaksiu12s" className="w-6 h-6 cursor-pointer hover:text-blue-400">
                    <LinkedIn />
                </a>

                <a title="My Facebook Profile" href="https://www.facebook.com/maksymilian.zajac.3" className="w-6 h-6 cursor-pointer hover:text-blue-500">
                    <Facebook />
                </a>

                <a title="My Instagram Profile" href="https://www.instagram.com/zaksiu12s/" className="w-6 h-6 cursor-pointer hover:text-red-400">
                    <Instagram />
                </a>

                {
                    /* vertical line */
                }
                <div className="h-16 w-[2px] bg-gray-300 "></div>
            </div>
        </div>
    </div>);
}