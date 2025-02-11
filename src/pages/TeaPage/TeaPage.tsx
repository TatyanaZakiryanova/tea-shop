import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import useAddToCart from '../../hooks/useAddToCart';
import useFetchTea from '../../hooks/useFetchTea';
import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import { selectAddedCartItem } from '../../utils/SelectAddedCartItem';
import styles from './TeaPage.module.scss';

const TeaPage = () => {
  const [activeWeight, setActiveWeight] = useState<number>(0);
  const { id } = useParams();
  const { tea } = useFetchTea(id);
  const { onClickAddItem } = useAddToCart(tea, activeWeight);
  const cartItems = useSelector(cartItemsSelector);

  const addedCartItem = selectAddedCartItem(cartItems, tea?.id, tea?.weight[activeWeight]);

  const addedValue = addedCartItem ? `В корзине: ${addedCartItem.count}` : `Добавить в корзину`;

  return (
    <div className={styles.wrapper}>
      {tea ? (
        <>
          <img src={tea.imageUrl} className={styles.img} />
          <div className={styles.inform}>
            <h2 className={styles.title}>{tea.title}</h2>
            <h4 className={styles.price}>
              {tea.price}
              <span> за 100 г</span>
            </h4>
            <p className={styles.type}>Тип: {tea.type} чай</p>
            <p className={styles.description}>{tea.description}</p>
            <ul className={styles.weight}>
              Вес:
              {tea.weight.map((grams, index) => (
                <li key={grams}>
                  <Button
                    onClick={() => setActiveWeight(index)}
                    active={activeWeight === index}
                    className={styles.weightButton}
                  >
                    {grams} г
                  </Button>
                </li>
              ))}
            </ul>
            <Button onClick={onClickAddItem} active={!!addedCartItem} className={styles.addButton}>
              <FaCartShopping /> {addedValue}
            </Button>
            <div>
              <Button className={styles.backButton}>
                <MdOutlineKeyboardDoubleArrowLeft />
                <Link to="/" className={styles.backLink}>
                  На главную
                </Link>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TeaPage;
