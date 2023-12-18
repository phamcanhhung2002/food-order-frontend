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

export interface IVoucher {
  code: string;
  discount: number;
}
export interface ICart {
  foods: ICartProduct[];
  subTotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  voucher?: IVoucher;
}

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  zipcode: string;
  address1: string;
  address2?: string;
}
