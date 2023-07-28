import {Product} from "../models/Product.model";
import {Category} from "../models/Category.model";
import {Manufacturer} from "../models/Manufacturer.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataContext {
  manufacturersObservable: Observable<Manufacturer[]> = new Observable<Manufacturer[]>();
  productsObservable: Observable<Product[]> = new Observable<Product[]>;
  categoriesObservable: Observable<Category[]> = new Observable<Category[]>();

  products: Product[] = [];
  categories: Category[] = [];
  manufacturers: Manufacturer[] = [];
  constructor(private _httpClient: HttpClient) {
    this.initStore();
  }

  initStore() {
    this.productsObservable = this._httpClient.get<Product[]>(`${API_URL}/api/products`);
    this.categoriesObservable = this._httpClient.get<Category[]>(`${API_URL}/api/categories`);
    this.manufacturersObservable = this._httpClient.get<Manufacturer[]>(`${API_URL}/api/manufacturers`);
/*
    this.productsObservable.subscribe(response => this.products = response );
    this.categoriesObservable.subscribe(res => this.categories = res);
    this.manufacturersObservable.subscribe(res => this.manufacturers = res);*/
  }
}
