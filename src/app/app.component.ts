import { Component } from '@angular/core';
import {DataContext} from "./shared/store/index.store";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, from, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop-client';

  showAdminLayout: boolean = false;

  constructor(private dataCtx: DataContext,private router: Router) {

    from(router.events)
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event  =>
      {
        this.showAdminLayout = (<NavigationEnd>event).url === '/Admin';
      });

    console.log('data context initiating...')
    dataCtx.productsObservable.subscribe(res => {
      dataCtx.products = res;
      console.log('data context products: ', dataCtx.products)
    });
    dataCtx.categoriesObservable.subscribe(res => {
      dataCtx.categories = res;
      console.log('data context categories: ', dataCtx.categories)
    });
    dataCtx.manufacturersObservable.subscribe(res => {
      dataCtx.manufacturers = res;
      console.log('data context manufacturers: ', dataCtx.manufacturers)
    });
  }
}
