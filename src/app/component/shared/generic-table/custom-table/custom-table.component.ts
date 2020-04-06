import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewChildren, QueryList } from '@angular/core';
import { GenericTableService } from '../generic-table.service';
import { TranslationService } from '../translation/translation.service';
import { DynamicLabelComponent } from '../dynamic-label/dynamic-label.component';
import { LabelDirective } from '../directive/label.directive';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() configObject: any;
  sortFields = {};
  allowEdit: boolean;
  currentAdIndex = -1;
  @ViewChildren(LabelDirective) labelHost: QueryList<LabelDirective>;
  constructor(private genericTableService: GenericTableService,
              public translationService: TranslationService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    setTimeout(() => { this.loadComponent(); });
    this.allowEdit = false;
  }

  /**
   * loadComponent
   *
   * @description - it adds dynamic component at runtime
   */
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicLabelComponent);
    // tslint:disable-next-line: no-string-literal
    this.labelHost['_results'].forEach(element => {
      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = element.data['custom-component'].data;
    });
  }

  /**
   * onSort
   *
   * @description - triggers when user click sort icon
   */
  onSort(value: any): void {
    if (value.sort === 'enable') {
      value.sort = 'asc';
      this.sendSortEvent(value.key, 'asc');
    } else if (value.sort === 'asc') {
      value.sort = 'desc';
      this.sendSortEvent(value.key, 'desc');
    } else {
      value.sort = 'enable';
      this.sendSortEvent(value.key, 'none');
    }
  }

  /**
   * sendSortEvent
   *
   * @description - invoke api to get result
   */
  sendSortEvent(field: string, method: any): void {
    if (method === 'none') {
      delete this.sortFields[field];
    } else {
      this.sortFields[field] = method;
    }
    const sortList = [];
    Object.keys(this.sortFields).map((key) => {
      sortList.push({field: key, method: this.sortFields[key]});
    });
    this.genericTableService.tabelEvents.next({event: 'SORT', value: sortList});
  }

  /**
   * allowInlineEdit
   *
   * @description - toggle inline option
   */
  allowInlineEdit(): void {
    this.allowEdit = !this.allowEdit;
  }

  /**
   * contentChange
   *
   * @description - invoke api and send updated record and get updated result
   */
  contentChange(item: any): void {
    this.genericTableService.tabelEvents.next({event: 'EDIT', value: item});
  }

  /**
   * checkValue
   *
   * @description - triggers when click on checkbox
   */
  checkValue(item: any, val): void {
    item.status = val.target.checked;
  }
}
