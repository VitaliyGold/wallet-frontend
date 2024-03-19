import { useForm } from "react-hook-form";
import type { FC } from 'react';

import { UiInput, UiButton } from "@/shared/ui";

import styles from './styles.module.less';
import type { CategoryFormData } from '../../types';

interface CreateFormProps {
    onSubmit: (formData: CategoryFormData) => void;
    onReset: () => void;
    editedData?: CategoryFormData;
}

const CreateForm: FC<CreateFormProps> = ({ onSubmit, onReset, editedData = { name: '' } }) => {

    const initialData = editedData ?? { name: '' };

    const isEdit = !!editedData;

    const { register, handleSubmit } = useForm<CategoryFormData>({ defaultValues: initialData });

    const onSubmitForm = (formData: CategoryFormData) => {
        if (!formData.name) {
            return;
        }
        onSubmit(formData);
    };

    return (
        <form className={styles.createForm} onReset={onReset} onSubmit={handleSubmit(onSubmitForm)}>
            <UiInput label="Название категории" labelPosition="top" { ...register('name') } />
            <div className={styles.formActions}>
                <UiButton type='reset' viewType='white' outline>
                    Отменить
                </UiButton>
                <UiButton type='submit'>
                    { isEdit ? 'Редактировать' : 'Создать' }
                </UiButton>
            </div>
            
        </form>
    )
}

export {
    CreateForm,
}