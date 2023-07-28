import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreadCrumbState} from "../../services/BreadCrumbState.service";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadCrumbItems: any;
  @Input() _breadCrumbType: string = '';

  items: any = [{route: '/', title: 'Home'}];

  constructor(private activateRoute: ActivatedRoute, private breadCrumbState: BreadCrumbState) {

  }

  capitalizeFirstLetterOfWord(s: string): string {
    const firstLetter = s.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = s.slice(1);

    const capitalizedWord = firstLetterCap + remainingLetters

    return capitalizedWord;
  }
  getItems(): any{
    let items = [{route: '/', title: 'Home'}];
    let params = this.activateRoute.snapshot.params;

    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        items.push({route: `/${params[key]}`, title: `${this.capitalizeFirstLetterOfWord(params[key])}`})
      }
    }

    return items;
  }

  ngOnInit(): void {
    let type = this.activateRoute.snapshot.url[0].path;
    let paramIsExist = this.activateRoute.snapshot.url[1];

    let param = '';
    if(paramIsExist !== undefined)
      param = paramIsExist.path;

    if(type === 'categories') {
      console.log('type: ',type)
      console.log('param:', param)

      this.items.push({route: `/${param}`, title: this.capitalizeFirstLetterOfWord(param)})
    }

    if(type === 'products') {
      console.log('products breadcrumb')

      console.log(this.breadCrumbItems)
    }

    console.log(this._breadCrumbType)
  }
}
