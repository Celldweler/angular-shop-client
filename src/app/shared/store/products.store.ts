import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product.model";
import {API_URL} from "../constants";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsStore {
  _products: Product[] = [];
  _productsObservable : Observable<Product[]> = new Observable<Product[]>();
  constructor(private _httpClient: HttpClient) {
   /* _httpClient.get<Product[]>(`${API_URL}/api/products`)
      .subscribe(response => {
        this._products = response;
      });*/
  }

  init() {
    this._productsObservable =  this._httpClient.get<Product[]>(`${API_URL}/api/products`);

    /*  .subscribe(response => {
        this._products = response;
      });*/
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${API_URL}/api/products/featured`);
  }

  getAll() : Observable<Product[]> {
    return this._productsObservable;
  }
}
