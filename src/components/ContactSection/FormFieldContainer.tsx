import { ReactNode } from "react";

export function FormFieldContainer(props: { children: ReactNode }) {
    return (
        <div className="mb-4">
            {props.children}
        </div>
    );
}
