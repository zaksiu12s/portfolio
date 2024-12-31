export default function TechnologyIcon(props: {
    src: string,
    alt: string,
    href: string
}) {
    return <a href={props.href} className="cursor-pointer hover:opacity-75">
        <img alt={props.alt} src={props.src} />
    </a>
}