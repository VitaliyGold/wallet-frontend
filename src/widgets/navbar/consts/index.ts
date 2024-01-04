import { INavbarItem } from "../types/types";
const linksList: INavbarItem[] = [
    {
        title: 'Дашборд',
        iconName: 'dashboard',
        link: '/'
    },
    {
        title: 'Таблица расходов',
        iconName: 'table',
        link: '/expenses',
    }
];

export {
    linksList,
}