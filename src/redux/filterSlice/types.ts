export enum SortEnum {
  TITLE = 'title',
  PRICE = 'price',
  RATING = 'rating',
}

export type SortName = {
  name: 'Название' | 'Цена ↓' | 'Цена ↑' | 'Рейтинг ↓' | 'Рейтинг ↑';
  sortParam: SortEnum;
};

export type FilterSlice = {
  categoryIndex: number;
  sort: SortName;
  searchValue: string;
  currentPage: number;
};
