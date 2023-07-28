import {Component, Input} from '@angular/core';

export interface SelectItem {
  value: string;
  text: string;
}

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent {
  @Input() options?: SelectItem[];

  constructor() {
  }
}
