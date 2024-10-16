import styles from './ItemsNotFound.module.scss';
import { PiWarningCircleLight } from 'react-icons/pi';

const ItemsNotFound = () => {
  return (
    <div className={styles.error}>
      <PiWarningCircleLight className={styles.erroricon} />
      <p>No items found.</p>
    </div>
  );
};

export default ItemsNotFound;
