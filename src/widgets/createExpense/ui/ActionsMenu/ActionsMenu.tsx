import { Link } from "react-router-dom";
import type { FC } from 'react';

import { UiButtonsGroup, UiButton } from "@/shared/ui";

interface ActionsMenuProps {
    saveExpensesCallback: () => void;
    goBackCallback: () => void;
    disabledSave: boolean;
}

const ActionsMenu: FC<ActionsMenuProps> = ({ saveExpensesCallback, goBackCallback, disabledSave }) => {

    return (
        <UiButtonsGroup>
            <Link to={'/expenses'} onClick={goBackCallback}>
                <UiButton>Назад</UiButton>
            </Link>
            <UiButton disabled={disabledSave} onClick={saveExpensesCallback}>Сохранить</UiButton>
        </UiButtonsGroup>
    )
}

export {
    ActionsMenu,
}