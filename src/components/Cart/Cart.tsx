import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ItemInCart from './ItemInCart';
import { v4 as uuidv4 } from 'uuid';
import EmptyCart from './EmptyCart';
import { CartItem } from '../../redux/cartSlice/types';

const Cart = (): JSX.Element => {
  const items = useAppSelector((state) => state.cartReducer.items);
  const totalCost = useAppSelector((state) => state.cartReducer.totalCost);

  const dispatch = useAppDispatch();

  const onClickClearCart = () => {
    dispatch(clearCart());
  };

  if (!totalCost) {
    return <EmptyCart />;
  }

  return (
    <div className="wrapper">
      <div className="cart">
        <div className="cart-header">
          <h2 className="cart-title">Cart</h2>
          <button className="clear-cart" onClick={onClickClearCart}>
            Clear cart
          </button>
        </div>
        <div className="cart-item">
          {items.map((item: CartItem) => (
            <ItemInCart key={uuidv4()} {...item} />
          ))}
        </div>
        <div className="cart-inform">
          <button className="items-cost">Total: {totalCost} &#8381;</button>
          <button className="order-button">Place an order</button>
        </div>
        <div className="cart-navigation">
          <Link to="/" className="back-link">
            <button className="cart-back">← Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
