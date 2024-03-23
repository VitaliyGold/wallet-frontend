interface CategoryEntity  {
    name: string;
    categoryId: string;
}

interface Category extends CategoryEntity {
    isLoading: boolean;
    isHidden: boolean;
}

export type {
    Category,
    CategoryEntity,
}