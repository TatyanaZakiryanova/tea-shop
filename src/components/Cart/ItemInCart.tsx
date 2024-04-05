import { CartItem, addItem, minusAmount, removeItem } from '../../redux/cartSlice';
import { useAppDispatch } from '../../redux/store';

const ItemInCart: React.FC<CartItem> = ({
  id,
  imageUrl,
  title,
  price,
  type,
  rating,
  weight,
  count,
}) => {
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
    <>
      <div className="card">
        <img className="card-image" src={imageUrl} />
        <h3 className="card-title">{title}</h3>
        <div className="card-inform">
          <h4 className="tea-price">{price} &#8381;</h4>
          <h4 className="tea-type">Type: {type} tea</h4>
          <h4 className="tea-rating">Rating: {rating}</h4>
          <h4 className="tea-weight">Weight: {weight} g</h4>
          <h4 className="tea-amount">
            Amount: {count}{' '}
            <button className="plus-amount" onClick={onClickPlusAmount}>
              +
            </button>
            <button className="minus-amount" onClick={onClickMinusAmount}>
              -
            </button>
          </h4>
        </div>
        <button className="delete-item" onClick={onClickRemoveItem}>
          X Delete item
        </button>
      </div>
    </>
  );
};

export default ItemInCart;
