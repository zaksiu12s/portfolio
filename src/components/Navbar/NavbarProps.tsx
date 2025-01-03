export interface NavbarProps {
    isScrolled: boolean;
    isMenuVisible: boolean;
    handleMenuClick: () => void;
    showMenuItems?: boolean
    loadMainPage?: boolean;
}
