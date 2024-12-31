export function HorizontalLines() {
    return (<>
        <div className="animate-growWidth animate-duration-500 animate-delay-100 absolute -top-10 left-0 transition-all w-3/4 max-w-[1000px] h-[2px] bg-white"></div>
        <div className="animate-growWidth animate-duration-500 absolute -bottom-10 right-0 transition-all w-3/4 max-w-[1000px] h-[2px] bg-white"></div>
    </>);
}
