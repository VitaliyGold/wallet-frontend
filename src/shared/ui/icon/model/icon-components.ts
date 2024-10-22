import Dashboard from "@/shared/assets/svg/dashboard.svg?react";
import Table from "@/shared/assets/svg/table.svg?react";
import User from "@/shared/assets/svg/user.svg?react";
import Plus from "@/shared/assets/svg/plus.svg?react";
import Edit from "@/shared/assets/svg/edit.svg?react";
import Down from "@/shared/assets/svg/down.svg?react";
import EmptyFilter from "@/shared/assets/svg/empty-filter.svg?react";
import FillFilter from "@/shared/assets/svg/fill-filter.svg?react";
import Settings from "@/shared/assets/svg/settings.svg?react";

const iconComponents = {
	user: User,
	table: Table,
	dashboard: Dashboard,
	plus: Plus,
	edit: Edit,
	remove: Plus,
	down: Down,
	"empty-filter": EmptyFilter,
	"fill-filter": FillFilter,
	settings: Settings,
};

export { iconComponents };
