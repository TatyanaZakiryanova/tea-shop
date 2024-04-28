export enum SortEnum {
  TITLE = 'title',
  PRICE = 'price',
  RATING = 'rating',
}

export type SortName = {
  name: 'Title' | 'Price ↓' | 'Price ↑' | 'Rating ↓' | 'Rating ↑';
  sortParam: SortEnum;
};

export type FilterSlice = {
  categoryIndex: number;
  sort: SortName;
  searchValue: string;
  currentPage: number;
};
