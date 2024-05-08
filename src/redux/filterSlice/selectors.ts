import { RootState } from '../store';

export const categorySelector = (state: RootState) => state.filterReducer.categoryIndex;
export const currentPageSelector = (state: RootState) => state.filterReducer.currentPage;
export const searchValueSelector = (state: RootState) => state.filterReducer.searchValue;
export const sortSelector = (state: RootState) => state.filterReducer.sort;
