import { PiSpinner } from 'react-icons/pi';
import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <PiSpinner className={styles.icon} />
      <br />
      Loading, please wait...
    </div>
  );
};
