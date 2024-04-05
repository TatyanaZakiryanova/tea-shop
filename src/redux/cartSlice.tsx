import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number;
  price: number;
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
      state.items.push(action.payload);
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
