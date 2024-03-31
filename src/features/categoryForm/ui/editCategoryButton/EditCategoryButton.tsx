import type { FC } from 'react';
import { useSelector } from 'react-redux';

import { UiIconButton } from '@/shared/ui';
import { useAppDispatch } from "@/app";
import type { RootStore } from '@/app';
import { updateCategoryThunks, categoryActions, categoryListSelector } from "@/entities/category";

import { CreateForm } from '../createForm';
import { useCategoryForm } from "../../model/useCategoryForm";
import { CategoryFormData } from "../../types";

interface EditCategoryButtonProps {
    categoryId: string;
}

const EditCategoryButton: FC<EditCategoryButtonProps> = ({ categoryId }) => {

    const { isFormOpen, refs, openTrigger, getFloatingProps, floatingStyles } = useCategoryForm();

    const dispatch = useAppDispatch();

    const editedCategory = useSelector((state: RootStore) => categoryListSelector.selectById(state, categoryId))
    
    const onResetForm = () => openTrigger(false);

    const onSubmitForm = async ({ name, color }: CategoryFormData) => {
        openTrigger(false);
        const oldCategory = {
            ...editedCategory,
        }
        dispatch(categoryActions.updateCategory({
            updatedId: categoryId,
            category: {
                ...editedCategory,
                name,
                isLoading: true,
                color
            }
        }));
        try {
            const updatedCategory = await dispatch(updateCategoryThunks({ name, categoryId, color })).unwrap();
            dispatch(categoryActions.updateCategory({
                updatedId: categoryId,
                category: updatedCategory,
            }));
        } catch (e) {
            dispatch(categoryActions.updateCategory({
                updatedId: categoryId,
                category: oldCategory,
            }))
        }
        
    }

    
    return (
        <>
            <UiIconButton iconType='edit' viewType="transparent" onClick={() => openTrigger(true)}/>
            {
                isFormOpen &&
                <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 'var(--popup-z-index)' }} {...getFloatingProps()}>
                    <CreateForm onReset={onResetForm} onSubmit={onSubmitForm} editedData={ { name: editedCategory.name, color: editedCategory.color } }/>
                </div>
            }
        </>
    )
};

export {
    EditCategoryButton,
}