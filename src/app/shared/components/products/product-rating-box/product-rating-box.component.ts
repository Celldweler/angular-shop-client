import { Component } from '@angular/core';

@Component({
  selector: 'app-product-rating-box',
  templateUrl: './product-rating-box.component.html',
  styleUrls: ['./product-rating-box.component.scss']
})
export class ProductRatingBoxComponent {

  processRating(): number {
    const maxRatingProcent= 100;
    const maxRating = 5;

    const userMark = 5;

    var result =( userMark / maxRating) * 100;

    return result;
  }
}
