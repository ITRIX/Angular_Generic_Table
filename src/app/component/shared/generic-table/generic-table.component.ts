import { Component, OnInit, Input } from '@angular/core';
import { GenericTableService } from '../generic-table.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  providers: [GenericTableService]
})
export class GenericTableComponent implements OnInit {
  @Input() configObject: any;
  searchValue: string;
  cursor: string;
  pageSize: number;
  sortValue: string;
  sort: any;
  updatedRecord: any;
  eventsData: Array<string>;

  constructor(private genericTableService: GenericTableService) { }

  ngOnInit(): void {
    this.genericTableService.tabelEvents.subscribe((data: any) => {
      let payload;
      if (data.event === 'SEARCH') {
        this.searchValue = data.value;
        this.cursor = this.configObject.searchConfig.searchFieldName;
      } else if (data.event === 'PAGESIZE') {
        this.pageSize = data.value;
      } else if (data.event === 'SORT') {
        this.sortValue = JSON.stringify(data.value);
      } else if (data.event === 'EDIT') {
        payload = JSON.stringify(data.value);
      }
      const query = this.generateQuery();
      this.genericTableService.getData(data.event, query, payload).subscribe(data => {
        // data variable assign to this.configObject.data;
        // this.eventsData is only for displaying for events
        this.eventsData = this.genericTableService.eventsData;
      }, error => {
        console.log('Data Load Failed');
      });
    });
  }

  /**
   * generateQuery
   *
   * @description - create query params for the api.
   */
  generateQuery(): string {
    const query = [];
    query.push(`${this.configObject.API_URL}/api/endpoint&pageSize=${this.pageSize}`);
    if (this.searchValue && this.searchValue !== '') { query.push(`&cursor=${this.cursor}&search=${this.searchValue}`) };
    if (this.sortValue && this.sortValue !== '') { query.push(`&sort=${this.sortValue}`) };
    return query.join('');
  }

}
