export interface IProduct {
  id: number;
  currentPrice: number;
  name: string;
  rating: number;
  featuredImageId: string;
}

export interface ICartProduct {
  food: IProduct;
  quantity: number;
}

export interface ICart {
  foods: ICartProduct[];
  subTotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
}
