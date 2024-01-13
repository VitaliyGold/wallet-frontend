import { createPortal } from "react-dom";
import type { FC, ReactNode } from "react";
import { createRef } from "react";

import { useClickOutside } from "@/shared/lib/useClickOutside";

import styles from './styles.module.less';

interface UiModalProps {
    children: ReactNode;
    onHideCallback?: () => void;
}

const UiModal: FC<UiModalProps> = ({ children, onHideCallback }) => {

    const parentContainer = document.getElementById('root');

    const modalRef = createRef<HTMLDivElement>();

    const onClickOutside = () => {
        if (onHideCallback) {
            onHideCallback();
        }
    }

    useClickOutside(modalRef, onClickOutside)

    const getModal = () => {
        return (
            <div className={styles.modalOverflow}>
                <div className={styles.modalContent} ref={modalRef}>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <>
            { parentContainer && createPortal(getModal(), parentContainer) }
        </>
    )
};

export {
    UiModal,
}