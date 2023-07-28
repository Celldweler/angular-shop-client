import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent {
  days?: any = [];
  months?: any = [
    {value: '', text: 'Month'},
    {value: '', text: 'January'},
    {value: '', text: 'February'},
    {value: '', text: 'March'},
    {value: '', text: 'April'},
    {value: '', text: 'May'},
    {value: '', text: 'June'},
    {value: '', text: 'July'},
    {value: '', text: 'August'},
    {value: '', text: 'September'},
    {value: '', text: 'October'},
    {value: '', text: 'November'},
    {value: '', text: 'December'},
  ];

  constructor() {
    this.days.push({value: 'day', text: 'Day'});
    for (let i = 1; i <= 31; i++) {
      this.days.push({value: i.toString(), text: i.toString()});
    }
  }
}
