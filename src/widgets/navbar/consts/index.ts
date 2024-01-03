import { INavbarItem } from "../types/types";
const linksList: INavbarItem[] = [
    {
        title: 'Дашборд',
        iconName: 'table',
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