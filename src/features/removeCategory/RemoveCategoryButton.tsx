import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootStore } from '@/app';
import { useAppDispatch } from '@/app';
import { categoryListSelector, removeCategoryThunks, categoryActions } from '@/entities/category';
import { UiIconButton, UiModal, UiText, UiButtonsGroup, UiButton } from '@/shared/ui';

import styles from './styles.module.less';

interface RemoveCategoryButtonProps {
    categoryId: string;
}

const RemoveCategoryButton: FC<RemoveCategoryButtonProps> = ({ categoryId }) => {

    const [ isOpenRemoveModal, setOpenRemoveModal ] = useState(false);

    const dispatch = useAppDispatch();

    const removedCategory = useSelector((state: RootStore) => categoryListSelector.selectById(state, categoryId));

    const removeCategory = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(categoryActions.updateCategory({ updatedId: categoryId, category: { ...removedCategory, isHidden: true } }));
        setOpenRemoveModal(false);
        try {
            await dispatch(removeCategoryThunks(categoryId)).unwrap();
            dispatch(categoryActions.removeCategory(categoryId));
        } catch(e) {
            dispatch(categoryActions.updateCategory({ updatedId: categoryId, category: { ...removedCategory, isHidden: false } }));
        }
    }

    return (
        <>
            <UiIconButton iconType='remove' viewType='transparent' onClick={() => setOpenRemoveModal(true)}/>
            { isOpenRemoveModal && 
                <UiModal onHideCallback={() => setOpenRemoveModal(false)}>
                    <form className={styles.removeCategoryForm} onSubmit={removeCategory} onReset={ () => setOpenRemoveModal(false) }>
                        <UiText>Вы действительно хотите удалить категорию {removedCategory.name}?</UiText>
                        <UiButtonsGroup>
                            <UiButton viewType="transparent" outline type='reset'>
                                Отмена
                            </UiButton>
                            <UiButton type='submit'>
                                Удалить
                            </UiButton>
                        </UiButtonsGroup>
                    </form>
                </UiModal>
            }
            
        </>
    )
};

export {
    RemoveCategoryButton,
}