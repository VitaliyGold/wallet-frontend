import { UiLoader } from "@/shared/ui";

import styles from './styles.module.less';

const BackgroundLoading = () => {
    return (
        <div className={styles.backgroundLoading}>
            <UiLoader size={16}/>
        </div>
    )
};

export {
    BackgroundLoading,
}