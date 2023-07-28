import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {CategoriesPageComponent} from "./pages/categories-page/categories-page.component";
import {TestPageComponent} from "./pages/test-page/test-page.component";
import {ProductsCatalogPageComponent} from "./pages/products-catalog-page/products-catalog-page.component";
import {CustomerAccountPageComponent} from "./pages/customer-account-page/customer-account-page.component";
import {AccountInfoComponent} from "./shared/components/customer-account/account-info/account-info.component";
import {
  CustomerAddressesComponent
} from "./shared/components/customer-account/customer-addresses/customer-addresses.component";
import {SitemapPageComponent} from "./pages/sitemap-page/sitemap-page.component";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'categories/:id', component: CategoriesPageComponent},
  {path: 'test', component: TestPageComponent},
  {path: 'cart', component: ShoppingCartPageComponent},
  {path: 'products/:subId', component: ProductsCatalogPageComponent},
  {path: 'my-account', component: CustomerAccountPageComponent, children: [
      {path: 'customer-info', component: AccountInfoComponent},
      {path: 'addresses', component: CustomerAddressesComponent},
  ]},
  {path: 'sitemap', component: SitemapPageComponent},
  {path: 'productDetails/:id', component: ProductDetailsPageComponent},
  {path: 'Admin', component: AdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
