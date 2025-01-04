import { ReactNode } from "react"

export default function Container(props: {
    children: ReactNode;
    relative?: boolean;
}) {
    return <div className={"container mx-auto " + (props.relative && " relative ")}>
        {props.children}
    </div>
}