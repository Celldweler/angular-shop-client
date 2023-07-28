import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../shared/models/Product.model";
import {API_URL} from "../../shared/constants";
import {RouterFactoryHelper} from "../../shared/utils/RouterFactoryHelper";
import {ShoppingCartService} from "../../shared/services/ShoppingCart.service";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent {
  productDetailsInfo: Product = new Product();
  _shoppingCartService: ShoppingCartService;

  qty: number =  1;

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              shoppingCartService : ShoppingCartService)
  {
    this._shoppingCartService = shoppingCartService;

    const productId = this.activatedRoute.snapshot.params["id"];

    this.httpClient.get<Product>(`${API_URL}/api/products/${productId}`)
      .subscribe(productResponse => {
        console.log("Product Details: ", productResponse)
        this.productDetailsInfo = productResponse;
      })
  }

    protected readonly RouterFactoryHelper = RouterFactoryHelper;
  protected readonly ShoppingCartService = ShoppingCartService;
}
