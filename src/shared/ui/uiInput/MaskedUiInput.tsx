import { IMaskMixin } from 'react-imask';

import { UiInput } from './uiInput';

const MaskedUiInput = IMaskMixin(({inputRef, ...props}) => {
    return (
        <UiInput
            {...props}
            ref={inputRef}
        />
    )
    }
);

export {
    MaskedUiInput,
}