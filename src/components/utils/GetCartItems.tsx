import { CartItem } from '../../redux/cartSlice';
import { calcTotalCost } from './CalculateCost';

export const GetCartItems = () => {
  const cartData = localStorage.getItem('cart');
  const items = cartData ? JSON.parse(cartData) : [];
  const totalCost = calcTotalCost(items);

  return {
    items: items as CartItem[],
    totalCost,
  };
};
