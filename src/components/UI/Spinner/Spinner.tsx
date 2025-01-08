import { PiSpinner } from 'react-icons/pi';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <PiSpinner className={styles.icon} />
    </div>
  );
};

export default Spinner;
