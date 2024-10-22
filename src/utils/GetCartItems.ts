import { CartItem } from '../redux/cartSlice/types';
import { calcTotalCost } from './CalculateCost';

export const GetCartItems = () => {
  const cartData = localStorage.getItem('cart');
  const items: CartItem[] | [] = cartData ? (JSON.parse(cartData) as CartItem[]) : [];
  const totalCost = calcTotalCost(items);

  return {
    items: items,
    totalCost,
  };
};
