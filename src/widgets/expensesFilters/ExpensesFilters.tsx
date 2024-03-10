import { useSelector } from "react-redux";
import { useState } from "react";
import { useFloating, autoUpdate, useClick, useInteractions, useDismiss, offset } from '@floating-ui/react';

import { useAppDispatch } from "@/app";
import { ExpensesActionsPanel } from "@/features/expensesActionsPanel";
import { filtersExpensesSelector, expensesActions } from "@/entities/expenses";
import type { ExpensesFilters } from "@/entities/expenses";
import { UiButton } from "@/shared/ui";

import { FilterBody } from './ui/FilterBody';

const ExpensesFilter = () => {

    const [ isFilterOpen, setFilterOpen ] = useState(false);

    const dispatch = useAppDispatch();

    const filters = useSelector(filtersExpensesSelector);

    const onSubmitFilters = (newFilters: ExpensesFilters) => {
        dispatch(expensesActions.setFilters(newFilters));
        setFilterOpen(false);
    };

    const openTrigger = (isOpen: boolean) => {
        setFilterOpen(isOpen);
    }

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
            <UiButton onClick={() => openTrigger(!isFilterOpen)} ref={refs.setReference}>Фильтры</UiButton>
            {
                isFilterOpen &&
                <div ref={refs.setFloating} style={{ ...floatingStyles, width: 'auto' }} {...getFloatingProps()}>
                    <FilterBody filters={filters} onSubmit={onSubmitFilters}/>
                </div>
            }
            
        </ExpensesActionsPanel>
    )
};

export {
    ExpensesFilter,
}