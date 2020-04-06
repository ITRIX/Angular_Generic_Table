import { Component, OnInit } from '@angular/core';
import { CustomTableConfigService } from 'src/app/services/custom-table-config.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableConfig: any;
  paginationConfig: any;
  constructor(private customTableConfigService: CustomTableConfigService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.tableConfig = JSON.parse(JSON.stringify(this.customTableConfigService.tabelConfigObject));
    this.tableConfig.searchConfig.searchFieldName = 'name';
    this.tableConfig.allowInlineEdit = true;
    this.tableConfig.headerData = [{
      key: 'id',
      name: 'dashboard.table.id',
      sort: 'enable',
      columnOrder: 0,
      type: 'string',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'name',
      name: 'dashboard.table.name',
      sort: 'enable',
      columnOrder: 1,
      type: 'string',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'status',
      name: 'dashboard.table.status',
      sort: 'enable',
      columnOrder: 2,
      type: 'checkbox',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'salary',
      name: 'dashboard.table.salary',
      sort: 'enable',
      columnOrder: 3,
      type: 'currency',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'dob',
      name: 'dashboard.table.dob',
      sort: 'desc',
      columnOrder: 4,
      type: 'date',
      visible: true,
      width: 'auto',
      alignment: 'left'
    },
    {
      key: 'custom-component',
      name: 'dashboard.table.skills',
      sort: 'none',
      columnOrder: 5,
      type: 'custom-component',
      visible: true,
      width: 'auto',
      alignment: 'left'
    }];

    this.tableConfig.data = this.dashboardService.getPersonDetails();

    this.tableConfig.headerData.sort((a, b) => {
      return a.columnOrder - b.columnOrder;
    });
  }

}
