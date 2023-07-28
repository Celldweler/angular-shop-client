import {Injectable} from "@angular/core";
import {IEntityWithKey} from "../interfaces/IEntityWithKey";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {  }

  getItems(key: string): any|null {
    let value = localStorage.getItem(key);
    if(value === null || value === undefined) return null;

    return JSON.parse(value);
  }

  setItems(key : string, value : any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
