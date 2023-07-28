import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fake-component',
  templateUrl: './fake-component.component.html',
  styleUrls: ['./fake-component.component.scss']
})
export class FakeComponentComponent {

  @Input() show: boolean = false;
}
