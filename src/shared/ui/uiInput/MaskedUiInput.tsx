import { IMaskMixin } from 'react-imask';

import { UiInput } from './uiInput';

const MaskedUiInput = IMaskMixin((props) => {
    const { inputRef, ...rest } = props;
    return (
        <UiInput
            {...rest}
            ref={inputRef}
        />
    )
    }
);

export {
    MaskedUiInput,
}