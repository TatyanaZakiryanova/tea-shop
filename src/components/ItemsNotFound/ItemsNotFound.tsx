import { MdOutlineErrorOutline } from 'react-icons/md';
import styles from './ItemsNotFound.module.scss';

const ItemsNotFound = () => {
  return (
    <div>
      <div className={styles.error}>
        <MdOutlineErrorOutline className={styles.erroricon} />
        <br />
        <p>No items found. Please try again later.</p>
      </div>
    </div>
  );
};

export default ItemsNotFound;
