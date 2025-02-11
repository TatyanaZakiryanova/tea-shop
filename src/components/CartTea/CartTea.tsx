import { RiDeleteBinLine } from 'react-icons/ri';

import { addItem, minusAmount, removeItem } from '../../redux/cartSlice/cartSlice';
import { CartItem } from '../../redux/cartSlice/types';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import styles from './CartTea.module.scss';

interface ICartItemProps {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number;
  price: number;
  count: number;
}

const CartTea = ({ id, imageUrl, title, price, type, rating, weight, count }: ICartItemProps) => {
  const dispatch = useAppDispatch();

  const onClickRemoveItem = () => {
    dispatch(removeItem({ id, weight } as CartItem));
  };

  const onClickPlusAmount = () => {
    dispatch(addItem({ id, weight } as CartItem));
  };

  const onClickMinusAmount = () => {
    dispatch(minusAmount({ id, weight } as CartItem));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.main}>
        <img className={styles.itemImage} src={imageUrl} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.inform}>
        <p className={styles.price}>{price}</p>
        <p>Тип: {type} чай</p>
        <p>Рейтинг: {rating}</p>
        <p>Вес: {weight} г</p>
      </div>
      <p className={styles.amount}>
        Количество: {count}
        <Button onClick={onClickPlusAmount} className={styles.amountButton}>
          +
        </Button>
        <Button disabled={count === 1} onClick={onClickMinusAmount} className={styles.amountButton}>
          -
        </Button>
      </p>
      <Button className={styles.removeButton} onClick={onClickRemoveItem}>
        <RiDeleteBinLine />
      </Button>
    </div>
  );
};

export default CartTea;
