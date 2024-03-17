import type { Category } from "@/entities/category";

type CreateCategoryFormData = Omit<Category, 'categoryId'>;

export type {
    CreateCategoryFormData,
}