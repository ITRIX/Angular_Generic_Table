import { Component, OnInit } from '@angular/core';
import { CustomTableConfigService } from 'src/app/services/custom-table-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableConfig: any;
  paginationConfig: any;
  constructor(private customTableConfigService: CustomTableConfigService) { }

  ngOnInit(): void {
    this.tableConfig = JSON.parse(JSON.stringify(this.customTableConfigService.tabelConfigObject));
    this.tableConfig.searchConfig.searchFieldName = 'name';
    this.tableConfig.allowInlineEdit = true;
    this.tableConfig.headerData = [{
      key: 'id',
      name: 'ID',
      sort: 'enable',
      columnOrder: 0,
      type: 'string',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'name',
      name: 'Name',
      sort: 'enable',
      columnOrder: 1,
      type: 'string',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'status',
      name: 'Married / Unmarried',
      sort: 'enable',
      columnOrder: 2,
      type: 'checkbox',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'salary',
      name: 'Salary',
      sort: 'enable',
      columnOrder: 3,
      type: 'currency',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'dob',
      name: 'DOB',
      sort: 'desc',
      columnOrder: 4,
      type: 'date',
      visible: true,
      width: 'auto',
      alignment: 'left'
    }];

    this.tableConfig.data = [{
      id: 1,
      name: 'Prakash',
      status: false,
      salary: 1000,
      currencyValue: 'EUR',
      dob: '674604000000'
    },
    {
      id: 2,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 3,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 4,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 5,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 6,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 7,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 8,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    },
    {
      id: 9,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    }
    ];

    this.tableConfig.headerData.sort((a, b) => {
      return a.columnOrder - b.columnOrder;
    });
  }

}
