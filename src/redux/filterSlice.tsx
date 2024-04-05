import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SortName = {
  name: string;
  sortParam: string;
};

export type FilterSlice = {
  categoryIndex: number;
  sort: SortName;
  searchValue: string;
};

const initialState: FilterSlice = {
  categoryIndex: 0,
  sort: {
    name: 'Title',
    sortParam: 'title',
  },
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIndex: (state, action: PayloadAction<number>) => {
      state.categoryIndex = action.payload;
    },
    setSortParam: (state, action: PayloadAction<SortName>) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryIndex, setSortParam, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
