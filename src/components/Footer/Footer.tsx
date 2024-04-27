import { IoIosLeaf } from 'react-icons/io';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      {' '}
      <IoIosLeaf />
      Tea Shop
      <br />
      <div className={styles.bottom}>2024</div>
    </div>
  );
};

export default Footer;
