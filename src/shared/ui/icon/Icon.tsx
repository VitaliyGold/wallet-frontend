import { memo } from 'react';
import type { FC, SVGProps } from 'react';

import { iconComponents } from './model/icon-components';
import { IconsTypes } from './model/types';


interface IconProps {
    iconType: IconsTypes;
    size?: number;
}

const Icon: FC<IconProps> = memo(({ iconType, size = 24 }) => {
    const IconComponent = iconComponents[iconType] as unknown as FC<SVGProps<SVGSVGElement>>;
    if (!IconComponent) {
        console.log('такой иконки нет в паке')
        return null;
    }
    return <IconComponent width={size} height={size}/>
});

export { Icon };