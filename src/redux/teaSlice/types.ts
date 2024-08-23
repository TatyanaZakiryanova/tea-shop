export type Tea = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number[];
  price: number;
  category: number;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface TeaState {
  items: Tea[];
  status: Status;
}

export type SearchParams = {
  order: string;
  category: string;
  search: string;
  sortBy: string;
  currentPage: string;
};
