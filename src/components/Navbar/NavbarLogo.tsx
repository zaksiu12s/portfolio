import handleScrollToTop from "../../helpers/handleScrollToTop";

export default function NavbarLogo() {
    return (<div className="font-Montserrat font-bold text-3xl cursor-pointer" onClick={handleScrollToTop}>
        <h1>zaaksiu</h1>
    </div>);
}