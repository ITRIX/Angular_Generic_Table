import { Component, OnInit, Input } from '@angular/core';
import { GenericTableService } from '../../generic-table.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() configObject: any;
  sortFields = {};
  allowEdit: boolean;
  constructor(private genericTableService: GenericTableService) { }

  ngOnInit(): void {
    this.allowEdit = false;
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
  sendSortEvent(field, method) {
    if(method === 'none') {
      delete this.sortFields[field];
    } else {
      this.sortFields[field] = method;
    }
    const sortList = [];
    Object.keys(this.sortFields).map((key)=>{ 
      sortList.push({field: key, method: this.sortFields[key]})
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
  contentChange(item){
    this.genericTableService.tabelEvents.next({event: 'EDIT', value: item});
  }

}
