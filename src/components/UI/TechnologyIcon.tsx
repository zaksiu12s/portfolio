export default function TechnologyIcon(props: {
    src: string,
    alt: string
}) {
    return <div className="cursor-pointer">
        <img alt={props.alt} src={props.src} />
    </div>
}