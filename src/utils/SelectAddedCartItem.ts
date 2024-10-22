import { CartItem } from '../redux/cartSlice/types';

export const selectAddedCartItem = (
  items: CartItem[],
  id?: string,
  weight?: number,
): CartItem | undefined => items.find((obj) => obj.id === id && obj.weight === weight);
