import {Component, inject} from '@angular/core';
import {FakeProductFilterTagsStore} from "../../../services/FakeProductFilterTagsStore.service";

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {
  groups = inject(FakeProductFilterTagsStore).Tags;

}
