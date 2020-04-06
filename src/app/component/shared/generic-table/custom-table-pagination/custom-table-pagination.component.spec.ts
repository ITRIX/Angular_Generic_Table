import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTablePaginationComponent } from './custom-table-pagination.component';
import { GenericTableService } from '../generic-table.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomTabelPaginationComponent', () => {
  let component: CustomTablePaginationComponent;
  let fixture: ComponentFixture<CustomTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ CustomTablePaginationComponent ],
      providers: [GenericTableService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTablePaginationComponent);
    component = fixture.componentInstance;
    component.tableConfig = {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
