export interface Food {
  id: string;
  name: string;
  featuredImageId: string;
  currentPrice: number;
  price: number;
}

export interface FoodDetail {
  id: string;
  name: string;
  price: number;
  salePrice: number | null;
  reviews: [];
  rate: number;
  qtyReview: number;
  images: Array<string>;
  qtyRemain: number;

  quickIntro: string;
  desc: Array<string>;
}

export interface Category {
  id: number;
  name: string;
  quantity: number;
}
