import { useForm, Controller } from "react-hook-form";
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import debouncePromise from 'awesome-debounce-promise';

import { UiInput, UiButton, UiColorPicker } from "@/shared/ui";
import { categoryListSelector } from "@/entities/category";

import styles from './styles.module.less';
import type { CategoryFormData } from '../../types';
import { сategoryFormErrors } from '../../consts/errors';

interface CreateFormProps {
    onSubmit: (formData: CategoryFormData) => void;
    onReset: () => void;
    editedData?: CategoryFormData;
}

const CreateForm: FC<CreateFormProps> = ({ onSubmit, onReset, editedData }) => {

    const initialData = editedData ?? { name: '', color: '#FFFFFF' };

    const isEdit = !!editedData?.name;

    const categoryNamesList = useSelector(categoryListSelector.selectAll).map(category => category.name);

    const { register, handleSubmit, formState: { errors }, control } = useForm<CategoryFormData>({ defaultValues: initialData, mode: 'onSubmit', reValidateMode: 'onChange' });

    const validate = {
        alreadyExist: debouncePromise((value: string) => {
            return categoryNamesList.includes(value) ? сategoryFormErrors.categoryAlreadyExist : true;
        }, 200)
    }


    return (
        <form className={styles.createForm} onReset={onReset} onSubmit={handleSubmit(onSubmit)}>
            <UiInput label="Название категории" errorMessage={errors.name?.message}  labelPosition="top" { ...register('name', { required: сategoryFormErrors.requiredName, validate }) } />
            <Controller
                control={control}
                name='color'
                render={({ field }) => (<UiColorPicker value={field.value}  onChange={field.onChange}/>)}
            />
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