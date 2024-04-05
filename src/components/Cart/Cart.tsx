import { CartItem, clearCart } from '../../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ItemInCart from './ItemInCart';

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
              <ItemInCart key={item.id} {...item} />
            ))}
          </div>
        </div>
        <button className="clear-cart" onClick={onClickClearCart}>
          Clear cart
        </button>
        <div className="items-cost">Total cost: {totalCost} &#8381;</div>
      </div>
    </div>
  );
};

export default Cart;
