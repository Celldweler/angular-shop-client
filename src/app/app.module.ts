import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesListComponent } from './shared/components/categories-list/categories-list.component';
import { ProductsListComponent } from './shared/components/products/products-list/products-list.component';
import { ProductCardComponent } from './shared/components/products/product-card/product-card.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { NavbarListComponent } from './shared/components/sidebar/navbar-list/navbar-list.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { ProductsFilterComponent } from './shared/components/sidebar/products-filter/products-filter.component';
import { MainPageWrapperComponent } from './shared/components/main-page-wrapper/main-page-wrapper.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ProductsCatalogPageComponent } from './pages/products-catalog-page/products-catalog-page.component';
import { ProductRatingBoxComponent } from './shared/components/products/product-rating-box/product-rating-box.component';
import { CustomerAccountPageComponent } from './pages/customer-account-page/customer-account-page.component';
import { FakeComponentComponent } from './shared/components/for-test-purposes/fake-component/fake-component.component';
import { AccountInfoComponent } from './shared/components/customer-account/account-info/account-info.component';
import { FormSelectComponent } from './shared/components/helpers/forms/form-select/form-select.component';
import { CustomerAddressesComponent } from './shared/components/customer-account/customer-addresses/customer-addresses.component';
import { SitemapPageComponent } from './pages/sitemap-page/sitemap-page.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import {FormsModule} from "@angular/forms";
import {DataContext} from "./shared/store/index.store";
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { AddToCartBtnComponent } from './shared/ui-controls/buttons/add-to-cart-btn/add-to-cart-btn.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CategoriesListComponent,
    ProductsListComponent,
    ProductCardComponent,
    AboutPageComponent,
    CategoriesPageComponent,
    NavbarListComponent,
    TestPageComponent,
    ProductsFilterComponent,
    MainPageWrapperComponent,
    BreadcrumbComponent,
    ProductsCatalogPageComponent,
    ProductRatingBoxComponent,
    CustomerAccountPageComponent,
    FakeComponentComponent,
    AccountInfoComponent,
    FormSelectComponent,
    CustomerAddressesComponent,
    SitemapPageComponent,
    ProductDetailsPageComponent,
    ShoppingCartPageComponent,
    AddToCartBtnComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage,
    ],
  providers: [DataContext],
  bootstrap: [AppComponent]
})
export class AppModule { }
