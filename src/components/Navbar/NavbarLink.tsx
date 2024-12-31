export function NavbarLink(props: { text: string; href: string }) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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


    return (<a href={props.href} onClick={handleClick} className="hover:text-neutral-950 dark:hover:text-white cursor-pointer">{props.text}</a>);
}
