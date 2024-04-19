import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchParams, Status, Tea, TeaState } from './types';

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
  status: Status.LOADING,
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
      state.status = Status.LOADING;
    });

    builder.addCase(fetchTeas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchTeas.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = teaSlice.actions;
export default teaSlice.reducer;
