import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {API_URL, NAV_TYPES} from "../../../constants";
import {DataContext} from "../../../store/index.store";
import {Category} from "../../../models/Category.model";
import {Manufacturer} from "../../../models/Manufacturer.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface NavbarListModel {
  title: string;
  items: string[];
  type: string;
}

@Component ({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss']
})
export class NavbarListComponent implements OnInit, OnChanges {

  navBarItemsVm: any;
  constructor(private ctx : DataContext, private _httpClient : HttpClient) {

  }

  ngOnInit(): void {

  }

 // @Input () type: string = '';
  @Input () type: string = '';
  @Input() items?: string[];
  @Input() title: string = 'Nav Title';

  @Input() hideTestNav: boolean = false;

  routeFactory(routeValue: string): string {
    return `/my-account/${routeValue.replace(' ', '-').trim().toLowerCase()}`;
  }

  getCurrentModel() : any {
    return this.navbarTestModel.filter(x => x.type === this.type)[0];
  }

  navbarTestModel: NavbarListModel[] = [
    {
      title: 'Categories',
      items: [
        'Computers',
        'Electronics',
        'Apparel',
        'Digital downloads',
        'Books',
        'Jewelry',
        'Gift Cards',
      ],
      type: 'CATEGORY'
    },
    {
      title: 'Manufacturers',
      items: [
        'Apple',
        'Sortcompany',
        'Undersoulwear',
      ],
      type: 'MANUFACTURER'
    },
  ];


  protected readonly NAV_TYPES = NAV_TYPES;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['type']) {
      console.log(changes['type'])

      if(changes['type'].currentValue === NAV_TYPES.MANUFACTURER) {
        this._httpClient.get<Manufacturer[]>(`${API_URL}/api/manufacturers`)
          .subscribe(res => {
            this.navBarItemsVm = res.map(x => ({
              id: x.id,
              name: x.name,
              route: '/test'
            }))

            console.log(this.navBarItemsVm)
          });
      }

      if(changes['type'].currentValue === NAV_TYPES.CATEGORY) {
        this._httpClient.get<Category[]>(`${API_URL}/api/categories`)
          .subscribe(res => {
            this.navBarItemsVm = res.map(x => ({
              id: x.id,
              name: x.name,
              route: '/test'
            }))

            console.log(this.navBarItemsVm)

          });

      }
    }
  }
}
