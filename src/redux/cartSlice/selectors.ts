import { useAppSelector } from '../store';

export const selectAddedCartItem = (id: string | undefined, weight: number | undefined) =>
  useAppSelector((state) =>
    state.cartReducer.items.find((obj) => obj.id === id && obj.weight === weight),
  );
