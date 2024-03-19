interface CategoryEntity  {
    name: string;
    categoryId: string;
}

interface Category extends CategoryEntity {
    isLoading: boolean;
}

export type {
    Category,
    CategoryEntity,
}