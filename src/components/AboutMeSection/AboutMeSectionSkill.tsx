import { ReactNode } from "react";

export function AboutMeSectionSkill({ children }: { children: ReactNode; }) {
    return (<div className="w-14 h-14 sm:w-20 sm:h-20 cursor-pointer">
        {children}
    </div>);
}
