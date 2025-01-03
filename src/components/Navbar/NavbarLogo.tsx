import handleScrollToTop from "../../helpers/handleScrollToTop";

export default function NavbarLogo(props: { goHome?: boolean }) {
    return <>{props.goHome ? <a href="/" className="font-Montserrat font-bold text-3xl cursor-pointer">
        <h1>zaaksiu</h1>
    </a> : <button type="button" className="font-Montserrat font-bold text-3xl cursor-pointer" onClick={handleScrollToTop}>
        <h1>zaaksiu.</h1>
    </button>}</>
}