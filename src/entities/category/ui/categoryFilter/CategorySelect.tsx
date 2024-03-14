import type { FC } from 'react';
import { useSelector } from "react-redux";

import { UiSelect } from "@/shared/ui";
import type { IUiOption } from "@/shared/ui/uiSelect";
import { categoryListSelector, categorySelector } from "../../model/categorySelectors";

interface CategorySelectProps {
    value: string[];
    label?: string;
    onChange: (categoryIds: string[]) => void;
    onClose?: () => void;
}

const CategorySelect: FC<CategorySelectProps> = ({ value, onChange, onClose, label }) => {

    const { isLoadingCategoryList } = useSelector(categorySelector);

    const options: IUiOption[] = useSelector(categoryListSelector.selectAll).map(category => ({
        value: category.categoryId,
        label: category.name
    }));

    const onSelectedCategories = (categoryId: string, isSelected: boolean) => {
        if (isSelected) {
            onChange([...value, categoryId]);
        } else {
            onChange(value.filter(category => category !== categoryId));
        }
    }

    return (
        <UiSelect
            currentValuePlaceholder='Выберите категорию'
            isOptionsLoading={isLoadingCategoryList}
            label={label}
            options={options}
            currentValue={value}
            onSelected={onSelectedCategories}
            onClose={onClose}
            multiply
        />
    )
};

export {
    CategorySelect,
}