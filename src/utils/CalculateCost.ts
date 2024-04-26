import { CartItem } from '../redux/cartSlice/types';

export const calcTotalCost = (items: CartItem[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
};
