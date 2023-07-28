import {Component, inject, Input} from '@angular/core';
import {FakeProductsStore} from "../../../services/FakeProductsStore.service";
import {Product} from "../../../models/Product.model";
import {API_URL} from "../../../constants";
import {ShoppingCartService} from "../../../services/ShoppingCart.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  //products = inject(FakeProductsStore).All();
  @Input() products: Product[] = [];

  _shoppingCartService: ShoppingCartService;

  constructor(shoppingCartService: ShoppingCartService) {
    this._shoppingCartService = shoppingCartService;
    console.log("inner products-list.component: ",this.products)
  }

  protected readonly API_URL = API_URL;

  createRoute(p: Product): string {
    return `${API_URL}/api/files/${p.images[0].fileName}/${p.images[0].type}`
  }

    protected readonly ShoppingCartService = ShoppingCartService;
}
