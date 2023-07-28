import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {API_URL, NAV_TYPES} from "../../shared/constants";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../shared/models/Product.model";
import {BreadCrumbState} from "../../shared/services/BreadCrumbState.service";
import {BreadCrumbItemModel} from "../../shared/models/BreadCrumbItem.model";
import {Category} from "../../shared/models/Category.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-catalog-page',
  templateUrl: './products-catalog-page.component.html',
  styleUrls: ['./products-catalog-page.component.scss']
})
export class ProductsCatalogPageComponent implements OnInit, DoCheck, OnChanges {
  protected readonly NAV_TYPES = NAV_TYPES;

  selectedListIcon: boolean = false;
  selectedGridIcon: boolean = true;

  products: Product[] = [];
  currentSubCategory: Category = new Category();
  private routeSubscription: Subscription;


  constructor(private activatedRoute:  ActivatedRoute,private _httpClient: HttpClient, private breadCrumbState: BreadCrumbState) {
    this.routeSubscription = activatedRoute.params.subscribe(params => {
      this.setPageState();
    });
  }

  setPageState() {
    const subId = this.activatedRoute.snapshot.params['subId'];
    console.log('subId', subId)

    this._httpClient.get<Category>(`${API_URL}/api/categories/${subId}/subOne`)
      .subscribe(response => {
        console.log(response)
        this.currentSubCategory = response;
      });

    this._httpClient.get<Product[]>(`${API_URL}/api/products/filterByCategory/${subId}`)
      .subscribe(response => {
        console.log(response)
        this.products = response;
      });
  }

  toggleListIcon () {
    this.selectedListIcon = !this.selectedListIcon;
    this.selectedGridIcon = !this.selectedGridIcon;
  }
  toggleGridIcon () {
    this.selectedGridIcon = !this.selectedGridIcon;
    this.selectedListIcon = !this.selectedListIcon;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }
}
