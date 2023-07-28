import {Component, inject} from '@angular/core';
import {Product} from "../../shared/models/Product.model";
import {FakeProductsStore} from "../../shared/services/FakeProductsStore.service";
import {ProductsStore} from "../../shared/store/products.store";
import {LocalStorageService} from "../../shared/services/LocalStorage.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  _productsStoreFake = inject(FakeProductsStore);

  constructor(private _productsStore: ProductsStore, private _localStore: LocalStorageService) {
    _productsStore.init();

    _productsStore.getAll()
      .subscribe(res => console.log('main layout products: ', res))
  }
}
