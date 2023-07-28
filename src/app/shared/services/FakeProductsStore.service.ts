import {Injectable} from "@angular/core";
import {Product} from "../models/Product.model";

@Injectable({
  providedIn: 'root',
})
export class FakeProductsStore {
  private _products: Product[] = [
    {
      id: 1,
      name: 'Apple MacBook Pro 13-inch',
      description: 'A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.',
      price: 1800.00,
      images: []
    },
    {
      id: 2,
      name: 'Lenovo Thinkpad X1 Carbon Laptop',
      description: 'Lenovo Thinkpad X1 Carbon Touch Intel Core i7 14 Ultrabook',
      price: 1360.00,
      images: []
    },
    {
      id: 3,
      name: 'HP Spectre XT Pro UltraBook',
      description: 'HP Spectre XT Pro UltraBook / Intel Core i5-2467M / 13.3 / 4GB / 128GB / Windows 7 Professional / Laptop',
      price: 1350.00,
      images: []
    },
  ];

  Add(product: Product ) {
    this._products.push(product);
  }

  All(): Product[]  {
    return this._products;
  }

}
