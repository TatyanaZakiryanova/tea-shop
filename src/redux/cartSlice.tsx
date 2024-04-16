import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calcTotalCost } from '../components/utils/CalculateCost';
import { GetCartItems } from '../components/utils/GetCartItems';

export type CartItem = {
  id: string;
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

const initialState: CartSlice = GetCartItems();

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
      state.totalCost = calcTotalCost(state.items);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id || item.weight !== action.payload.weight,
      );
      state.totalCost = calcTotalCost(state.items);
    },
    minusAmount: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id && item.weight === action.payload.weight,
      );
      if (findItem) {
        findItem.count--;
      }
      state.totalCost = calcTotalCost(state.items);
    },
    clearCart: (state) => {
      (state.items = []), (state.totalCost = 0);
    },
  },
});

export const { addItem, removeItem, minusAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
