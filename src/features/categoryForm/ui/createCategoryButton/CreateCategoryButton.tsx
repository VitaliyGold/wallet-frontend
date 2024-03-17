import { UiIconButton } from "@/shared/ui";
import { useAppDispatch } from "@/app";
import { createCategoryThunks, categoryActions } from "@/entities/category";

import { CreateForm } from '../createForm';
import { useCategoryForm } from "../../model/useCategoryForm";
import { CreateCategoryFormData } from "../../types";

const CreateCategoryButton = () => {
    const { isFormOpen, refs, openTrigger, getFloatingProps, floatingStyles } = useCategoryForm();

    const dispatch = useAppDispatch();
    
    const onResetForm = () => openTrigger(false);

    const onSubmitForm = async (formData: CreateCategoryFormData) => {
        openTrigger(false);
        const tempCategoryId = crypto.randomUUID();
        dispatch(categoryActions.addNewCategory({
            categoryId: tempCategoryId,
            name: formData.name,
            isLoading: true,
        }));
        const category = await dispatch(createCategoryThunks(formData.name)).unwrap();
        dispatch(categoryActions.updateCategory({ updatedId: tempCategoryId, category: { ...category, isLoading: false } }));
        
    }

    return (
        <>
            <UiIconButton iconType="plus" viewType="blue" withoutPaddings={false} onClick={() => openTrigger(!isFormOpen)} ref={refs.setReference}/>
            {
                isFormOpen &&
                <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 'var(--popup-z-index)' }} {...getFloatingProps()}>
                    <CreateForm onReset={onResetForm} onSubmit={onSubmitForm}/>
                </div>
            }
        </>
    )
};

export {
    CreateCategoryButton,
}