import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app";

import { UiLoader, UiModal } from "@/shared/ui";

const DetailExpenses = () => {

    const [ isLoading, setLoading ] = useState(false);

    if (isLoading) {
        return <UiLoader/>
    }

    return (
        <></>
    )
};

export {
    DetailExpenses,
}