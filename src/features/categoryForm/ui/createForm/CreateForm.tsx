import { useForm } from "react-hook-form";
import type { FC } from 'react';

import { UiInput, UiButton } from "@/shared/ui";

import styles from './styles.module.less';
import type { CreateCategoryFormData } from '../../types';

interface CreateFormProps {
    onSubmit: (formData: CreateCategoryFormData) => void;
    onReset: () => void;
}

const CreateForm: FC<CreateFormProps> = ({ onSubmit, onReset }) => {

    const { register, handleSubmit, control } = useForm<CreateCategoryFormData>()

    const onSubmitForm = (formData: CreateCategoryFormData) => {
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
                    Создать
                </UiButton>
            </div>
            
        </form>
    )
}

export {
    CreateForm,
}