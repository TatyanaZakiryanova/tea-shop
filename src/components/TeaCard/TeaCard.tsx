import { useState } from 'react';
import { addItem } from '../../redux/cartSlice/cartSlice';
import { useAppDispatch } from '../../redux/store';
import { Link } from 'react-router-dom';
import { TeaProps } from './types';
import { CartItem } from '../../redux/cartSlice/types';
import { selectAddedCartItem } from '../../redux/cartSlice/selectors';
import styles from './TeaCard.module.scss';

export const TeaCard: React.FC<TeaProps> = ({
  id,
  imageUrl,
  title,
  type,
  weight,
  price,
  rating,
}) => {
  const [activeWeight, setActiveWeight] = useState<number>(0);

  const dispatch = useAppDispatch();

  const onClickAddItem = () => {
    const item: CartItem = {
      id,
      imageUrl,
      title,
      type,
      weight: weight[activeWeight],
      price,
      rating,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const addedCartItem = selectAddedCartItem(id, weight[activeWeight]);
  const addedValue = addedCartItem ? `In cart: ${addedCartItem.count}` : `Add to cart`;

  return (
    <>
      <div className={styles.card}>
        <Link key={id} to={`/tea/${id}`}>
          <img className={styles.image} src={imageUrl} title="Show description" />
        </Link>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.inform}>
          <h4 className={styles.price}>{price}</h4>
          <p>per 100 grams</p>
          <h4>Type: {type} tea</h4>
          <h4>Rating: {rating}</h4>
          <div>
            <h4>Weight:</h4>
            <ul>
              {weight.map((grams, index) => (
                <li key={grams}>
                  <button
                    onClick={() => setActiveWeight(index)}
                    className={activeWeight === index ? styles.activebutton : ''}
                  >
                    {grams} g
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={onClickAddItem}
            className={addedCartItem ? styles.added : styles.notadded}
          >
            {addedValue}
          </button>
        </div>
      </div>
    </>
  );
};
