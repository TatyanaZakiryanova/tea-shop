import { MdOutlineErrorOutline } from 'react-icons/md';
import styles from './DataNotFound.module.scss';

export const DataNotFound = (): JSX.Element => {
  return (
    <div className={styles.error}>
      <MdOutlineErrorOutline />
      <h3>Data not found</h3>
    </div>
  );
};
