type NavbarLinks = 'table' | 'dashboard';

interface INavbarItem {
    title: string;
    link: string;
    iconName: NavbarLinks;
}

export type {
    INavbarItem
}