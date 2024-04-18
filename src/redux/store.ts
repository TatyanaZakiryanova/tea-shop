import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice/filterSlice';
import cartReducer from './cartSlice/cartSlice';
import teaReducer from './teaSlice/teaSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    teaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
