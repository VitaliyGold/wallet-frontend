import { Link, useNavigate } from "react-router-dom";
import type { FC } from 'react';

import { ButtonsGroup, UiButton } from "@/shared/ui";

interface ActionsMenuProps {
    saveExpensesCallback: () => void;
    goBackCallback: () => void;
    disabledSave: boolean;
}

const ActionsMenu: FC<ActionsMenuProps> = ({ saveExpensesCallback, goBackCallback, disabledSave }) => {

    const navigate = useNavigate();

    return (
        <ButtonsGroup>
            <Link to={'/expenses'} onClick={goBackCallback}>
                <UiButton>Назад</UiButton>
            </Link>
            <UiButton disabled={disabledSave} onClick={saveExpensesCallback}>Сохранить</UiButton>
        </ButtonsGroup>
    )
}

export {
    ActionsMenu,
}