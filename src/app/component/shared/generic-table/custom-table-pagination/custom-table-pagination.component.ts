import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { GenericTableService } from '../generic-table.service';

@Component({
  selector: 'app-custom-table-pagination',
  templateUrl: './custom-table-pagination.component.html',
  styleUrls: ['./custom-table-pagination.component.scss']
})
export class CustomTablePaginationComponent implements OnInit {
  form: FormGroup;
  @Input() tableConfig: any;
  defaultPageSizes: Array<number>;
  currentPage: number;
  totalItems: number;
  pageSize: number;
  totalPages: number;
  listOfPages: Array<number>;
  startIndex: number;
  endIndex: number;
  allItems: any;
  constructor(private genericTableService: GenericTableService) { }

  ngOnInit(): void {
    this.defaultPageSizes = this.tableConfig.paginationConfig.defaultPageSizes;
    this.currentPage = 1;
    this.totalItems = this.tableConfig.data?.length;
    this.allItems = JSON.parse(JSON.stringify(this.tableConfig.data));
    this.pageSize = this.tableConfig.paginationConfig.defaultPageSize;
    this.form = new FormGroup({
      selectedPageSize: new FormControl(this.pageSize, []),
    });
    this.getPage();
  }

  /**
   * changePageSize
   *
   * @description - triggers when user change page size option
   */
  changePageSize(): void {
    this.pageSize = this.form.get('selectedPageSize').value;
    this.currentPage = 1;
    this.getPage();
  }

  /**
   * getPage
   *
   * @description - calculate list of pages to render pagination control
   */
  getPage(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.listOfPages = Array(this.totalPages).fill(1).map((x, y) => x + y);
    this.showPaginatedData();
  }

  /**
   * showPaginatedData
   *
   * @description - calculate page start and end value and alter dataset as per selected page
   */
  showPaginatedData(): void {
    this.tableConfig.data = JSON.parse(JSON.stringify(this.allItems));
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItems - 1);
    this.tableConfig.data = this.tableConfig.data.slice(this.startIndex, this.endIndex + 1);
    this.genericTableService.tabelEvents.next({event: 'PAGESIZE', value: this.pageSize});
  }

  /**
   * setPage
   *
   * @description - triggers when select page number
   */
  setPage(page): void {
    if (this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else {
      this.currentPage = page;
    }
    this.showPaginatedData();
  }

}
