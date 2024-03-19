import type { Category } from "@/entities/category";

type CategoryFormData = Omit<Category, 'categoryId' | 'isLoading'>;

export type {
    CategoryFormData,
}