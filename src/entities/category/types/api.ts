interface CategoryApi {
	category_id: string;
	name: string;
	color: string;
}

type GetCategoryRequest = () => Promise<CategoryApi[]>;

type CreateCategoryRequest = (
	createdCategory: Omit<CategoryApi, "category_id">,
) => Promise<CategoryApi>;

type UpdateCategoryRequest = (
	updatedCategory: CategoryApi,
) => Promise<CategoryApi>;

type RemoveCategoryRequest = (categoryId: string) => Promise<CategoryApi>;

export type {
	GetCategoryRequest,
	CreateCategoryRequest,
	UpdateCategoryRequest,
	RemoveCategoryRequest,
	CategoryApi,
};
