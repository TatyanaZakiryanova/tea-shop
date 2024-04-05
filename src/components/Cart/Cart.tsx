import { CartItem } from '../../redux/cartSlice';
import { useAppSelector } from '../../redux/store';
import ItemInCart from './ItemInCart';

const Cart = (): JSX.Element => {
  const items = useAppSelector((state) => state.cartReducer.items);
  const totalCost = useAppSelector((state) => state.cartReducer.totalCost);
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
          <div className="items-number">Number</div>
          <div className="items-cost">Total Cost: {totalCost} &#8381;</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
