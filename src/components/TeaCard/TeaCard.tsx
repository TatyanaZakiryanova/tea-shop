import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useAddToCart from '../../hooks/useAddToCart';
import { cartItemsSelector } from '../../redux/cartSlice/selectors';
import { selectAddedCartItem } from '../../utils/SelectAddedCartItem';
import Button from '../UI/Button/Button';
import styles from './TeaCard.module.scss';

interface ITeaCardProps {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  weight: number[];
  price: number;
  rating: number;
  description: string;
}

const TeaCard = ({
  id,
  imageUrl,
  title,
  type,
  weight,
  price,
  rating,
  description,
}: ITeaCardProps) => {
  const [activeWeight, setActiveWeight] = useState<number>(0);
  const cartItems = useSelector(cartItemsSelector);

  const tea = { id, imageUrl, title, type, weight, price, rating, description };
  const { onClickAddItem } = useAddToCart(tea, activeWeight);

  const addedCartItem = selectAddedCartItem(cartItems, id, weight[activeWeight]);
  const addedValue = addedCartItem ? `В корзине: ${addedCartItem.count}` : `Добавить в корзину`;
  return (
    <div className={styles.teaCard}>
      <Link key={id} to={`/tea/${id}`}>
        <img className={styles.image} src={imageUrl} title="Показать описание" />
      </Link>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.inform}>
        <h4 className={styles.price}>{price}</h4>
        <h4 className={styles.type}>Тип: {type} чай</h4>
        <h4 className={styles.rating}>Рейтинг: {rating}</h4>
        <div className={styles.weight}>
          <h4>Вес:</h4>
          <ul>
            {weight.map((grams, index) => (
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
        </div>
        <Button onClick={onClickAddItem} active={!!addedCartItem} className={styles.addButton}>
          {addedValue}
        </Button>
      </div>
    </div>
  );
};

export default TeaCard;
