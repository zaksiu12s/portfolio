import { ReactNode } from "react";

export function AboutMeSectionSkill({ children }: { children: ReactNode; }) {
    return (<div className="w-14 h-14 sm:w-20 sm:h-20 md:h-24 md:w-24 lg:w-28 lg:h-28 cursor-pointer">
        {children}
    </div>);
}
