import { useState } from "react";

import { useFloating, autoUpdate, useClick, useInteractions, useDismiss, offset } from '@floating-ui/react';
// TODO вынести всю работу с тултипами в отдельный shared хук
const useCategoryForm = () => {
    const [ isFormOpen, setFormOpen ] = useState(false);

    const openTrigger = (isOpen: boolean) => {
        setFormOpen(isOpen);
    }

    const { refs, floatingStyles, context } = useFloating({
        placement: 'bottom-start',
        strategy: 'absolute',
        open: isFormOpen,
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

    return {
        openTrigger,
        isFormOpen,
        refs,
        getFloatingProps,
        floatingStyles,
    }
};

export {
    useCategoryForm,
}