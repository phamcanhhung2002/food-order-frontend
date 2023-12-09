import { Food } from "./listType";

export interface ReturnFoodType {
  data: Food[];
  metaData: {
    page?: number;
    size?: number;
    total: number;
  };
}
