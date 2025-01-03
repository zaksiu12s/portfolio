export default function Label(props: {
    htmlFor: string;
    text: string;
}) {
    return (
        <label
            htmlFor={props.htmlFor}
            className="block text-neutral-700 dark:text-neutral-400 font-Poppins text-xl font-bold">
            {props.text}
        </label>
    )
}