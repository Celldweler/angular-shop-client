import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../../models/Category.model";
import {ShoppingCartService} from "../../services/ShoppingCart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  categories: Category[] = [];
  loadingCategories: boolean = false;
  _shoppingCartService: ShoppingCartService;
  constructor(httpClient: HttpClient, shoppingCartService: ShoppingCartService) {
    this._shoppingCartService = shoppingCartService;

    httpClient.get<Category[]>('https://localhost:7147/api/categories', {responseType: 'json'}).subscribe(res => {
      console.log(res)
      this.categories = res;
      this.loadingCategories = true;
    })
  }
}
