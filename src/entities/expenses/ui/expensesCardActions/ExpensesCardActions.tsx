import { FC } from 'react';

import { UiIconButton, UiButtonsGroup } from '@/shared/ui';

interface ExpensesCardActionsProps {
    editAction: () => void;
    removeAction: () => void;
}
const ExpensesCardActions: FC<ExpensesCardActionsProps> = ({ editAction, removeAction }) => {

    return (
        <UiButtonsGroup>
            <UiIconButton iconType='edit' onClick={editAction} />
            <UiIconButton iconType='remove' onClick={removeAction} />
        </UiButtonsGroup>
    )
}

export {
    ExpensesCardActions,
}