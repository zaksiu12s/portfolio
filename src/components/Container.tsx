import { ReactNode } from "react"

export default function Container(props: {
    children: ReactNode
}) {
    return <div className="container mx-auto">
        {props.children}
    </div>
}