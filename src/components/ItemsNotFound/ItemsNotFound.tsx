import styles from './ItemsNotFound.module.scss';
import { PiWarningCircleLight } from 'react-icons/pi';

const ItemsNotFound = () => {
  return (
    <div>
      <div className={styles.error}>
        <PiWarningCircleLight className={styles.erroricon} />
        <p>No items found.</p>
      </div>
    </div>
  );
};

export default ItemsNotFound;
