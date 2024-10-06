import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useFloating, autoUpdate, useClick, useInteractions, useDismiss, offset } from '@floating-ui/react';
import { useForm, useWatch } from "react-hook-form";

import { useAppDispatch } from "@/app";
import { ExpensesActionsPanel } from "@/features/expensesActionsPanel";
import { filtersExpensesSelector, expensesActions, defaultExpensesFilter } from "@/entities/expenses";
import type { ExpensesFilters } from "@/entities/expenses";
import { UiButton, Icon } from "@/shared/ui";

import { FilterBody } from './ui/FilterBody';
import { PeriodFilter } from "./ui/PeriodFilter/PeriodFilter";
import styles from './styles.module.less';
import { debounce } from "@/shared/lib/debounce";

const ExpensesFilter = () => {

    const [ isFilterOpen, setFilterOpen ] = useState(false);

    const dispatch = useAppDispatch();

    const filters = useSelector(filtersExpensesSelector);

    const onSubmitFilters = (newFilters: ExpensesFilters) => {
        dispatch(expensesActions.setFilters(newFilters));
    };

    const { register, handleSubmit, control, reset } = useForm<ExpensesFilters>({ defaultValues: filters });

    const onChangeFilters = handleSubmit(onSubmitFilters);

    const onChangeDebouncedFilters = useCallback(debounce(onChangeFilters, 500), []);

    const expensesFilters = useWatch<ExpensesFilters>({ name: ['categoryIds', 'startDate', 'endDate', 'expensesName'], control });

    const openTrigger = (isOpen: boolean) => {
        setFilterOpen(isOpen);
    }

    const onReset = () => {
        setFilterOpen(false);
        reset();
    }

    useEffect(() => {
        return () => onSubmitFilters(defaultExpensesFilter());
    }, []);

    useEffect(() => {
        onChangeDebouncedFilters();
    }, [expensesFilters]);

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        strategy: 'absolute',
        open: isFilterOpen,
        onOpenChange: openTrigger,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
        ]
    });

    const dismiss = useDismiss(context);

    const click = useClick(context);

    const {getFloatingProps} = useInteractions([
        click, dismiss,
      ])

    return (
        <ExpensesActionsPanel>
            <UiButton onClick={() => openTrigger(!isFilterOpen)} addBefore={<Icon iconType='empty-filter' size={16}/>} ref={refs.setReference} viewType="white" outline>
                Фильтры
            </UiButton>
            <form className={styles.filterForm} onReset={onReset}>
                {
                    isFilterOpen &&
                    <div ref={refs.setFloating} style={{ ...floatingStyles, width: 'auto', zIndex: 'var(--popup-z-index)' }} {...getFloatingProps()}>
                        <FilterBody control={control} register={register} />
                    </div>
                }
                <PeriodFilter control={control}/>
            </form>
            
            
        </ExpensesActionsPanel>
    )
};

export {
    ExpensesFilter,
}