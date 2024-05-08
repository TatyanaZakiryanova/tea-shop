import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>Cart</h2>
      </div>
      <div className={styles.empty}>
        <h1>
          <IoCartOutline className={styles.icon} />
          <br />
          Cart is empty
        </h1>
        <br />
        <p>Return to the main page to order items:</p>
        <br />
        <Link to="/">
          <button className={styles.back}>Home</button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
