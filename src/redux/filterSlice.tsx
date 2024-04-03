import { createSlice } from '@reduxjs/toolkit';

export type SortName = {
  name: string;
  sortParam: string;
};

export type FilterSlice = {
  categoryIndex: number;
  sort: SortName;
};

const initialState: FilterSlice = {
  categoryIndex: 0,
  sort: {
    name: 'Title',
    sortParam: 'Title',
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
