import { IoIosLeaf } from 'react-icons/io';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IoIosLeaf />
      <h1>Tea Shop</h1>
      <p>интернет-магазин листового чая</p>
      <div className={styles.bottom}>2024</div>
    </footer>
  );
};

export default Footer;
