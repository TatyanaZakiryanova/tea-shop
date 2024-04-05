import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number;
  price: number;
  count: number;
};

export type CartSlice = {
  items: CartItem[];
  totalCost: number;
};

const initialState: CartSlice = {
  items: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      if (action.payload.weight === 200) {
        action.payload.price *= 2;
      }
      const findItem = state.items.find(
        (item) => item.id === action.payload.id && item.weight === action.payload.weight,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCost += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      (state.items = []), (state.totalCost = 0);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
