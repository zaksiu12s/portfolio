import { ChangeEvent } from "react";

export default function Input(props: {
    data: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    id: string;
    name: string;
    required?: boolean;
    type?: string;
    placeholder?: string;
}) {
    return <input
        type={props.type || "text"}
        id={props.id}
        value={props.data}
        required={props.required}
        onChange={props.onChange}
        name={props.name}
        className="w-full text-neutral-200 p-3 mt-2 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-600 bg-neutral-800"
        placeholder={props.placeholder}
    />
}