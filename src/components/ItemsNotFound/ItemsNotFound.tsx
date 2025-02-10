import { PiWarningCircleLight } from 'react-icons/pi';

import styles from './ItemsNotFound.module.scss';

const ItemsNotFound = () => {
  return (
    <div className={styles.error}>
      <PiWarningCircleLight className={styles.errorIcon} />
      <p>Товары не найдены</p>
    </div>
  );
};

export default ItemsNotFound;
