import { MdOutlineErrorOutline } from 'react-icons/md';
import styles from './DataNotFound.module.scss';

console.log(styles);
export const DataNotFound = () => {
  return (
    <div className={styles.error}>
      <h1>
        <MdOutlineErrorOutline className="error-icon" />
        <br />
        Data not found
      </h1>
    </div>
  );
};
