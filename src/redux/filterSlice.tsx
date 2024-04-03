import { createSlice } from '@reduxjs/toolkit';

export type FilterSlice = {
  categoryIndex: number;
  sort: {
    name: string;
    sortParam: string;
  };
};

const initialState: FilterSlice = {
  categoryIndex: 0,
  sort: {
    name: 'Title',
    sortParam: 'title',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIndex: (state, action) => {
      state.categoryIndex = action.payload;
    },
  },
});

export const { setCategoryIndex } = filterSlice.actions;
export default filterSlice.reducer;
