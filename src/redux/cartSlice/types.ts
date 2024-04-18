export type CartItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number;
  price: number;
  count: number;
};

export type CartSlice = {
  items: CartItem[];
  totalCost: number;
};
