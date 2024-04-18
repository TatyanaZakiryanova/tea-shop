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
