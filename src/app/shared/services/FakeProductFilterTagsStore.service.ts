import {ProductTag} from "../models/Product.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FakeProductFilterTagsStore {
  Tags: ProductTag[] = [
    {id: 1, groupName: 'CPU Type', items: ['Intel Core i5', 'Intel Core i7']},
    {id: 2, groupName: 'Memory', items: ['4 GB', '8 GB', '16 GB']}
  ]
}
