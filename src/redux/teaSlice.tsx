import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Tea = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number[];
  price: number;
  category: number;
};

export interface TeaState {
  items: Tea[];
  status: string;
}

export type SearchParams = {
  order: string;
  category: string;
  search: string;
  sortBy: string;
  currentPage: string;
};

export const fetchTeas = createAsyncThunk<Tea[], SearchParams>(
  'tea/fetchTeasStatus',
  async (params) => {
    const { order, category, search, sortBy, currentPage } = params;
    const { data } = await axios.get(
      `https://6608a863a2a5dd477b14ab61.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}&page=${currentPage}&limit=${10}`,
    );
    return data;
  },
);

const initialState: TeaState = {
  items: [],
  status: 'loading',
};

const teaSlice = createSlice({
  name: 'tea',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Tea[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeas.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });

    builder.addCase(fetchTeas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchTeas.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = teaSlice.actions;
export default teaSlice.reducer;
