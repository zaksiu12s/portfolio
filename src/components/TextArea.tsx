import { ChangeEvent } from "react";

export default function TextArea(props: {
    data: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    id: string;
    name: string;
    required?: boolean;
    placeholder?: string;
}) {
    return <textarea value={props.data}
        required={props.required}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        className="min-h-20 max-h-96 w-full text-neutral-200 p-3 mt-2 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-600 bg-neutral-800"
        placeholder={props.placeholder}
    />
}