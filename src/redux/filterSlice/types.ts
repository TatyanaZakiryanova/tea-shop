export type SortName = {
  name: string;
  sortParam: string;
};

export type FilterSlice = {
  categoryIndex: number;
  sort: SortName;
  searchValue: string;
  currentPage: number;
};
