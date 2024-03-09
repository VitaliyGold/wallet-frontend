interface CategoryApi {
    category_id: string;
    name: string;
}

type GetCategoryRequest = () => Promise<CategoryApi[]>;

type CreateCategoryRequest = (name: string) => Promise<CategoryApi>;

type UpdateCategoryRequest = (updatedCategory: CategoryApi) => Promise<CategoryApi>;

type RemoveCategoryRequest = (categoryId: string) => Promise<CategoryApi>;

export type {
    GetCategoryRequest,
    CreateCategoryRequest,
    UpdateCategoryRequest,
    RemoveCategoryRequest,
    CategoryApi,
}