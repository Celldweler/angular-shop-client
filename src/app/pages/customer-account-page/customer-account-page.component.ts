import { Component } from '@angular/core';
import {NAV_TYPES} from "../../shared/constants";
import {NavItemViewModel} from "../../shared/models/NavItemView.model";

@Component({
  selector: 'app-customer-account-page',
  templateUrl: './customer-account-page.component.html',
  styleUrls: ['./customer-account-page.component.scss']
})
export class CustomerAccountPageComponent {
  customerPageTitle: string = 'My account - Customer info';
  testCustomerNavTitle: string = "My account";
  testCustomerNavItems: string[] = [
    'Customer info',
    'Addresses',
    'Orders',
    'Downloadable products',
    'Back in stock subscriptions',
    'Reward points',
    'Change password',
    'My product reviews',
  ];

  protected readonly NAV_TYPES = NAV_TYPES;
}
