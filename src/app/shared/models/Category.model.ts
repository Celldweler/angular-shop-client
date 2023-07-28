import {Image} from "./Image.model";
import {IEntityWithKey} from "../interfaces/IEntityWithKey";

export class Category {
  id?: number;
  name: string = '';
  parentId?: number;
  image?: Image;
  subCategories: string[] = [];
}

export class SubCategory {
  id?: number;
  parentId?: number;
  name?: string;
}


