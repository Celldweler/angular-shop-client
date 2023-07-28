import {Image} from "./Image.model";
import {IEntityWithKey} from "../interfaces/IEntityWithKey";

export class Product  {
  id?: number;
  name?: string;
  description?: string;
  price: number = 0;
  tags?: ProductTag[];
  viewPath?: string;
  images: Image[] = [];
}

export  class ProductTag {
  id?: number;
  groupName?: string;
  items?: string[];
}
