import { MdOutlineErrorOutline } from 'react-icons/md';
import styles from './DataNotFound.module.scss';

export const DataNotFound = (): JSX.Element => {
  return (
    <div className={styles.error}>
      <h1>
        <MdOutlineErrorOutline />
        <br />
        Data not found
      </h1>
    </div>
  );
};
