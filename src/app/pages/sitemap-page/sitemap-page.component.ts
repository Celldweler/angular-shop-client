import {Component, OnInit} from '@angular/core';
import {GENRAL_PAGES} from "../../shared/constants";
import {DataContext} from "../../shared/store/index.store";

@Component({
  selector: 'app-sitemap-page',
  templateUrl: './sitemap-page.component.html',
  styleUrls: ['./sitemap-page.component.scss']
})
export class SitemapPageComponent implements OnInit{
  siteMapItems: any = [
    {title: 'General', items: GENRAL_PAGES},
  ];
  testEntities: any = [
    {title: 'General', items: GENRAL_PAGES},
    {title: 'Categories', items: [...GENRAL_PAGES]},
    {title: 'Manufacturers', items: [...GENRAL_PAGES]},
  ];

  constructor(private ctx : DataContext) {
  }

  routeFactory(entity: any, type: string): string {
    let targetRoute = '';
    if(type === 'Categories') {
      targetRoute = '/categories/' + entity.id;
    }
    else if(type === 'Manufacturers') {

    }
    else if(type === 'General')  {
      return entity.route;
    }

    return targetRoute;
  }
  ngOnInit(): void {
    this.ctx.categoriesObservable.subscribe(res => {
      this.siteMapItems.push({
        title: 'Categories', items: res
      });
    });

    this.ctx.manufacturersObservable.subscribe(res => {
      this.siteMapItems.push({
        title: 'Manufacturers', items: res
      });
    });
  }
}
