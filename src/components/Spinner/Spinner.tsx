import { PiSpinnerGapLight } from 'react-icons/pi';
import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <PiSpinnerGapLight className={styles.icon} />
      <br />
      Loading, please wait...
    </div>
  );
};
