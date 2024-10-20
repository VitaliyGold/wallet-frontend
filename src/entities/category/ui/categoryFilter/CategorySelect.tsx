import type { FC } from 'react';
import { useSelector } from "react-redux";

import { UiSelect } from "@/shared/ui";
import type { IUiOption } from "@/shared/ui/uiSelect";
import { categoryListSelector, categorySelector } from "../../model/categorySelectors";

interface CategorySelectProps {
    value: string | string[] | null;
    label?: string;
    multiply?: boolean;
    onChange: (categoryId?: string | string[] | null) => void;
    onClose?: () => void;
}

const CategorySelect: FC<CategorySelectProps> = ({ value, onChange, onClose, label, multiply = false }) => {

    const { isLoadingCategoryList } = useSelector(categorySelector);

    const options: IUiOption[] = useSelector(categoryListSelector.selectAll).map(category => ({
        value: category.categoryId,
        label: category.name
    }));

    const isMultiply = multiply && Array.isArray(value);

    const onSelectedCategory = (categoryId: string, isSelected: boolean) => {
        if (isSelected) {
            if (isMultiply) onChange([ categoryId, ...value ]);
            else onChange(null);
        } else {
            if (isMultiply) onChange(value.filter(category => category !== categoryId));
            else onChange(null);
        }
    };

    const clearCategory = () => {
        if (isMultiply) {
            onChange([])
        } else {
            onChange(null);
        }
    }

    return (
        <UiSelect
            currentValuePlaceholder='Выберите категорию'
            isOptionsLoading={isLoadingCategoryList}
            label={label}
            options={options}
            currentValue={value}
            onSelected={onSelectedCategory}
            onClose={onClose}
            onClear={clearCategory}
        />
    )
};

export {
    CategorySelect,
}