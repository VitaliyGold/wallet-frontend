import { IMaskMixin } from "react-imask";
import type { Ref } from "react";

import { UiInput } from "./uiInput";

const MaskedUiInput = IMaskMixin((props) => {
	const { inputRef, ...rest } = props;
	return <UiInput {...rest} ref={inputRef as Ref<HTMLInputElement>} />;
});

export { MaskedUiInput };
