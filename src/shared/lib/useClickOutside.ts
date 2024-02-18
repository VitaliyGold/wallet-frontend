import type { RefObject, MouseEvent } from "react";

import { useEventListener } from "./useEventListener";

const useClickOutside = (ref: RefObject<HTMLElement | null>, cb: CallableFunction) => {
    useEventListener("click", (e: MouseEvent) => {
        if (ref?.current === null || ref.current.contains(e.target as Node)) return
        cb(e)
    }, document, true)
};

export {
    useClickOutside,
}