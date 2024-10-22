import type { Category } from "@/entities/category";

type CategoryFormData = Omit<Category, "categoryId" | "isLoading" | "isHidden">;

export type { CategoryFormData };
