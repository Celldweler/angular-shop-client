import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {API_URL, NAV_TYPES} from "../../shared/constants";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../shared/models/Category.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnChanges, DoCheck{

  _subCategories: Category[] = [];

  protected readonly NAV_TYPES = NAV_TYPES;

  currentParentCategory: Category = new Category();

  private routeSubscription: Subscription;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => {
      console.log(params['id'])
      this.setPageState();
    });

    //this.setPageState();
  }

  setPageState() {
    let parentCategoryId = this.route.snapshot.params["id"];

    this.httpClient.get<Category[]>(`${API_URL}/api/categories/${parentCategoryId}/subs`)
      .subscribe(response => {
        this._subCategories = response;
        console.log(this._subCategories)
      })

    this.httpClient.get<Category>(`${API_URL}/api/categories/${parentCategoryId}/getOne`)
      .subscribe(response => {
        console.log("category: ",response)
        this.currentParentCategory = response
      });

    console.log(this.route.snapshot.params["id"]);
  }

  protected readonly API_URL = API_URL;

  // life cycle hooks
  ngDoCheck(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  routeFactory(imgName: string, imgType: string) : string {
    let resultRoute = API_URL+'/api/files/';

    return resultRoute;
  }
}
