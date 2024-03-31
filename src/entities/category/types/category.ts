interface CategoryEntity  {
    name: string;
    categoryId: string;
    color: string;
}

interface Category extends CategoryEntity {
    isLoading: boolean;
    isHidden: boolean;
}

export type {
    Category,
    CategoryEntity,
}