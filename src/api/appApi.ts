import { IShippingAddress } from "../types/cartType";
import axiosClient from "./axiosClient";
import axiosPrivate from "./axiosPrivate";

class appAPI {
  allFoods = () => {
    const url = "/foods";
    return axiosClient.get(url);
  };
  bestSeller = (num: number) => {
    const url = `/foods/best-seller${num ? '?num=' + num : ''}`
    return axiosClient.get(url);
  }
  detailFood = (id: number) => {
    const url = `/foods/${id}`;
    return axiosClient.get(url);
  };
  filterFoods = (query: {
    name?: string;
    page?: number;
    size?: number;
    cat?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
  }) => {
    const url = "/foods";
    return axiosClient.get(url, { params: query });
  };

  allCategories = () => {
    const url = "/categories";
    return axiosClient.get(url);
  };

  allMenus = () => {
    const url = "/menus";
    return axiosClient.get(url);
  };
  signIn = (data: { email: string; password: string }) => {
    const url = "/login/customers";
    return axiosClient.post(url, data);
  };

  signUp = (data: { email: string; password: string; name: string }) => {
    const url = "/signup";
    return axiosClient.post(url, data);
  };

  getRefreshToken = () => {
    const url = "/refresh/customers";

    return axiosClient.get(url);
  };

  getCart = (userId: number) => {
    const url = `/customers/${userId}/order`;
    return axiosPrivate.get(url);
  };

  addFoodToOrder = (userId: number, foodId: number) => {
    const url = `customers/${userId}/order/food`;
    return axiosPrivate.post(url, {
      foodId,
    });
  };

  removeFoodFromOrder = (userId: number, foodId: number) => {
    const url = `customers/${userId}/order/food/${foodId}`;
    return axiosPrivate.delete(url);
  };

  updateProduct = (userId: number, foodId: number, quantity: number) => {
    const url = `customers/${userId}/order/food/${foodId}`;
    return axiosPrivate.patch(url, {
      quantity,
    });
  };

  checkout = (userId: number, shippingAddress: IShippingAddress) => {
    const url = `customers/${userId}/order/checkout`;
    return axiosPrivate.patch(url, shippingAddress);
  };

  discount = (userId: number, orderId: number, code: string) => {
    const url = `discount/getdiscountamount`;
    return axiosPrivate.post(url, {customerId: userId, orderId, discountCodeId: code});
  };


  logOut = () => {
    const url = `logout/customers`;
    return axiosClient.get(url);
  };
}

export const appApi = new appAPI();
