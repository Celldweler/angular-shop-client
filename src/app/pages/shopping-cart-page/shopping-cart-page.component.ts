import { Component } from '@angular/core';
import {ShoppingCartService} from "../../shared/services/ShoppingCart.service";
import {CartItem} from "../../shared/models/CartItem.model";
import {RouterFactoryHelper} from "../../shared/utils/RouterFactoryHelper";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent {
  _shoppingCartService: ShoppingCartService;
  cartItems: CartItem[] = [];

  constructor(shoppingCartService: ShoppingCartService) {
    this._shoppingCartService = shoppingCartService;
  }


  protected readonly RouterFactoryHelper = RouterFactoryHelper;
}
