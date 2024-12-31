import { ReactNode } from "react";

export function NavbarLinkContainer(props: { children: ReactNode; }) {
    return (<div className="sm:flex gap-4 text-neutral-700 dark:text-gray-300 items-center hidden flex-wrap justify-end">
        {props.children}
    </div>);
}
