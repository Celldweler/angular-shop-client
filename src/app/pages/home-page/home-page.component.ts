import { Component } from '@angular/core';
import {ProductsStore} from "../../shared/store/products.store";
import {Product} from "../../shared/models/Product.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  _featuredProducts: Product[] = [];
  constructor(private productsStore : ProductsStore) {
    productsStore.getFeaturedProducts()
      .subscribe(response => {
        this._featuredProducts = response;
      })
  }
}
