import { Icon, UiButton } from "@/shared/ui";
import { useAppDispatch } from "@/app";
import { createCategoryThunks, categoryActions } from "@/entities/category";

import { CreateForm } from '../createForm';
import { useCategoryForm } from "../../model/useCategoryForm";
import { CategoryFormData } from "../../types";

const CreateCategoryButton = () => {
    const { isFormOpen, refs, openTrigger, getFloatingProps, floatingStyles } = useCategoryForm();

    const dispatch = useAppDispatch();
    
    const onResetForm = () => openTrigger(false);

    const onSubmitForm = async (formData: CategoryFormData) => {
        openTrigger(false);
        const tempCategoryId = crypto.randomUUID();
        dispatch(categoryActions.addNewCategory({
            categoryId: tempCategoryId,
            name: formData.name,
            isLoading: true,
            isHidden: false,
            color: formData.color,
        }));
        try {
            const category = await dispatch(createCategoryThunks(formData)).unwrap();
            dispatch(categoryActions.updateCategory({ updatedId: tempCategoryId, category: { ...category, isLoading: false } }));
        } catch (e) {
            dispatch(categoryActions.removeCategory(tempCategoryId))
        }
        
    }

    return (
        <>  
            <UiButton 
                viewType="blue" 
                onClick={() => openTrigger(!isFormOpen)} 
                ref={refs.setReference} 
                size="large" 
                outline 
                addBefore={<Icon iconType="plus" size={18}/>}
            >  
                Добавить категорию
            </UiButton>
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