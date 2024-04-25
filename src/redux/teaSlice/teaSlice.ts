import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status, Tea, TeaState } from './types';
import { fetchTeas } from './asyncActions';

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
