import { Suspense } from "react";
import { IRoutesProps } from "../types/props";
import ShoppingCart from "../pages/cart";
import Checkout from "../pages/checkout";

const PrivateRoutes: Array<IRoutesProps> = [
  {
    path: "cart",
    element: (
      <Suspense>
        {" "}
        <ShoppingCart />{" "}
      </Suspense>
    ),
    title: "Shopping Cart",
  },
  {
    path: "/cart/checkout",
    element: (
      <Suspense>
        {" "}
        <Checkout />{" "}
      </Suspense>
    ),
    title: "Chef",
  },
];

export default PrivateRoutes;
