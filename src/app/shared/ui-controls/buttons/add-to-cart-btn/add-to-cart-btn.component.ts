import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent {
  onAddToCartHandler() {
    console.log('on add to cart click')
  }
}
