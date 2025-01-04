export function NavbarButton(props: { text: string; href: string }) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const targetId = props.href;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return <button type="button" onClick={handleClick} className="hover:rounded-md transition-all hover:scale-105 cursor-pointer h-min max-w-max bg-accent px-2 py-1 text-white font-bold">
        {props.text}
    </button>;
}
