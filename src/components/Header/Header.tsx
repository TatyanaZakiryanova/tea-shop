import { useEffect, useRef } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { GiCoffeeCup } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import Search from '../Search/Search';
import Button from '../UI/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const items = useSelector(cartItemsSelector);
  const totalCount = items.length;
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className={styles.header}>
      {location.pathname !== '/cart' && (
        <Button className={styles.cartButton}>
          <Link to="cart" className={styles.cartLink}>
            <FaCartShopping className={styles.cartIcon} /> {totalCount}
          </Link>
        </Button>
      )}
      <div className={styles.searchInput}>{location.pathname !== '/cart' && <Search />}</div>
      <Link to="/" className={styles.link}>
        <div className={styles.title}>
          <h1>
            <GiCoffeeCup />
            Tea Shop
          </h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
