import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';
import styles from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <>
      <div>
        <h2 className={styles.title}>Корзина</h2>
      </div>
      <div className={styles.emptyCart}>
        <IoCartOutline className={styles.emptyCartIcon} size={60} />
        <h2>Корзина пуста</h2>
        <p>Вернитесь на главную, чтобы заказать товары:</p>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <Button className={styles.homeButton}>
            <MdOutlineKeyboardDoubleArrowLeft />
            На главную
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
