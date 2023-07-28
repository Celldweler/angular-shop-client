import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../constants";
import {Category} from "../../models/Category.model";

/*
export default interface Category {
  title: string;
  image: string;
}
*/

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  categoriesFromApi: Category[] = [];
  loading: boolean = false;

  constructor(httpClient: HttpClient) {
    httpClient.get<Category[]>(`${API_URL}/api/categories/3`).subscribe(res => {
      this.categoriesFromApi = res;
      this.loading = true;
    })
  }

 /* categoriesPicturesPath: string = 'assets/images/categories/';
  categories: Category[] = [
    {title: 'Electronics', image: 'electronics_category.jpeg'},
    {title: 'Apparel', image: 'apparel.jpeg'},
    {title: 'Digital downloads', image: 'digital-downloads.jpeg'},*/

 /*   {title: 'Electronics', image: 'electronics_category.jpeg'},
    {title: 'Apparel', image: 'apparel.jpeg'},
    {title: 'Digital downloads', image: 'digital-downloads.jpeg'},*/
  /*];*/


  protected readonly API_URL = API_URL;
}
