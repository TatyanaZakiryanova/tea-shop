import { MdOutlineErrorOutline } from 'react-icons/md';

import styles from './NotFound.module.scss';

const DataNotFound = () => {
  return (
    <div className={styles.error}>
      <MdOutlineErrorOutline size={30} />
      <h3>Страница не найдена</h3>
    </div>
  );
};

export default DataNotFound;
