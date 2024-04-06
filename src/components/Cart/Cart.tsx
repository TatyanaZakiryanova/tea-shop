import { Link } from 'react-router-dom';
import { CartItem, clearCart } from '../../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ItemInCart from './ItemInCart';
import { v4 as uuidv4 } from 'uuid';

const Cart = (): JSX.Element => {
  const items = useAppSelector((state) => state.cartReducer.items);
  const totalCost = useAppSelector((state) => state.cartReducer.totalCost);

  const dispatch = useAppDispatch();
  const onClickClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="wrapper">
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <div className="cart-items">
          <div className="cart-item">
            {items.map((item: CartItem) => (
              <ItemInCart key={uuidv4()} {...item} />
            ))}
          </div>
        </div>
        <div className="cart-inform">
          <div className="items-cost">Total cost: {totalCost} &#8381;</div>
          <button className="clear-cart" onClick={onClickClearCart}>
            Clear cart
          </button>
        </div>
        <Link to="/" className="back-link">
          <button className="cart-back">← Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
