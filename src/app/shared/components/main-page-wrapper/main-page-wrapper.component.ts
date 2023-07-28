import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NAV_TYPES} from "../../constants";

@Component({
  selector: 'app-main-page-wrapper',
  templateUrl: './main-page-wrapper.component.html',
  styleUrls: ['./main-page-wrapper.component.scss']
})
export class MainPageWrapperComponent implements OnInit, OnChanges, DoCheck {
    @Input() showBreadCrumb: boolean = true;
    @Input() breadCrumbItems: any;
    @Input() breadCrumbType: string = '';

    protected readonly NAV_TYPES = NAV_TYPES;

    @Input() pageTitle: string = 'Page Title';

    @Input() contentType: string = '';
    @Input() showMainSidebarNavs: boolean = true;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }
}
