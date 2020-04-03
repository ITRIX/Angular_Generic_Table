import { Injectable } from '@angular/core';

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
      defaultPageSizes: [5, 10, 25, 50, 100],
      curentPageSize: 25
    },
    searchConfig: {
      allowSearch: true,
      searchFieldName: ''
    },
    allowInlineEdit: false
  };
  constructor() { }
}
