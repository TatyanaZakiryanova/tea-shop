export const calculatePrice = (basePrice: number, weight: number): number => {
  switch (weight) {
    case 200:
      return basePrice * 2;
    default:
      return basePrice;
  }
};
