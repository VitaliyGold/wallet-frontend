import type { FC } from 'react';

import { UiIconButton } from '@/shared/ui';

import { CreateForm } from '../createForm';
import { useCategoryForm } from "../../model/useCategoryForm";

interface EditCategoryButtonProps {
    categoryId: string;
}

const EditCategoryButton: FC<EditCategoryButtonProps> = ({ categoryId }) => {

    const { isFormOpen, refs, openTrigger, getFloatingProps, floatingStyles } = useCategoryForm();
    
    return (
        <>
            <UiIconButton iconType='edit' viewType="transparent" onClick={() => openTrigger(true)}/>
        </>
    )
};

export {
    EditCategoryButton,
}