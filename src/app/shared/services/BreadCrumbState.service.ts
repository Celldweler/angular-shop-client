import {BreadCrumbItemModel} from "../models/BreadCrumbItem.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbState {
  private _breadCrumbItems: BreadCrumbItemModel[] = [
    {title: 'home', route: '/', orderDisplay: 1}
  ];

  add(item: BreadCrumbItemModel) {
    this._breadCrumbItems.push(item);
  }

  addRange(items: BreadCrumbItemModel[]) {
    items.forEach(item => {
      this._breadCrumbItems.push({ title: item.title, route: item.route, orderDisplay: item.orderDisplay })
    })
  }

  get(): BreadCrumbItemModel[] {
    return this._breadCrumbItems;
  }
}
