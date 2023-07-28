import {Inject, Injectable} from "@angular/core";
import {LocalStorageService} from "./LocalStorage.service";
import {LOCAL_STORE_KEYS} from "../constants";
import {Product} from "../models/Product.model";
import {CartItem} from "../models/CartItem.model";
import {Category} from "../models/Category.model";
import {CommonHelper} from "../utils/CommonHelper";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public count: number =  0;
  constructor(private _localStore: LocalStorageService) {
    this.count = (<[]>this._localStore.getItems(LOCAL_STORE_KEYS.CART))?.length ?? 0;
  }

  cartIsEmpty() : boolean {
    const cart = this._localStore.getItems(LOCAL_STORE_KEYS.CART);

    return CommonHelper.IsNullOrUndefined(cart);
  }

  public addToCartHandler(product : Product, qty: number) {
    console.log(`add to cart handler payload: `, product);

    let cart = <CartItem[]>this._localStore.getItems(LOCAL_STORE_KEYS.CART);
    let cartItem : CartItem = {
      productId: product.id,
      productName: product.name,
      qty: qty,
      productImage: product.images[0].fileName,
      productPrice: product.price,
    };

    if(cart === null) {
      let tmpCart : CartItem[] = [];
      tmpCart.push(cartItem);

      this._localStore.setItems(LOCAL_STORE_KEYS.CART, tmpCart);
      this.count = tmpCart.length;
    }
    else  {
      // check is current product to adding is already exist in store and update only qty and totalPrice
      let existedProductIndex  =  cart.findIndex(x => x.productId === product.id) ;

      if(existedProductIndex === -1) {
        cart.push(cartItem)
      }
      else {
        cart[existedProductIndex].qty += qty;
      }

      this._localStore.setItems(LOCAL_STORE_KEYS.CART, cart);
      this.count = cart.length;
    }
  }

  removeFromCart() {

  }

  getCartItems() {
    return <CartItem[]>this._localStore.getItems(LOCAL_STORE_KEYS.CART);
  }
}
