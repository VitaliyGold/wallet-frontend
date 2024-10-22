type NavbarLinks = "table" | "dashboard" | "settings";

interface INavbarItem {
	title: string;
	link: string;
	iconName: NavbarLinks;
}

export type { INavbarItem };
