import { Injectable } from '@angular/core';
import { Type } from '@angular/core';
import { DynamicLabelComponent } from '../component/dynamic-component/dynamic-label/dynamic-label.component';
import { DynamicListComponent } from '../component/dynamic-component/dynamic-list/dynamic-list.component';

@Injectable({
  providedIn: 'root'
})
export class CustomTableConfigService {
  tabelConfigObject: any = {
    API_URL: 'Http://restapi.com',
    headerData: [],
    data: [],
    paginationConfig: {
      defaultPageSize: 25,
      defaultPageSizes: [5, 10, 25, 50, 100]
    },
    searchConfig: {
      allowSearch: true,
      searchFieldName: ''
    },
    allowInlineEdit: false
  };
  constructor() { }

  getDynamicComponent() {
    return [
      new AdItem(DynamicLabelComponent),
      new AdItem(DynamicListComponent),
    ];
  }
}

export class AdItem {
  constructor(public component: Type<any>) {}
}

