import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableComponent } from './generic-table.component';
import { GenericTableService } from './generic-table.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GenericTabelComponent', () => {
  let component: GenericTableComponent;
  let fixture: ComponentFixture<GenericTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ GenericTableComponent ],
      providers: [GenericTableService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    component.configObject = {
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
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit()', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call generateQuery() to check URL correctness', () => {
    // Arrange
    component.pageSize = 5;
    const expectedURL = component.configObject.API_URL + '/api/endpoint&pageSize=' + component.pageSize;
    // Act
    const url = component.generateQuery();
    // Assert
    expect(expectedURL).toEqual(url);
  });

  it('should call generateQuery() to check URL correctness for pagesize', () => {
    // Arrange
    component.pageSize = 5;
    // Act
    const url = component.generateQuery();
    // Assert
    expect(url).toMatch('&pageSize=5');
  });

  it('should call generateQuery() to check URL correctness for sort parameters', () => {
    // Arrange
    component.pageSize = 25;
    component.sortValue = '[{"field":"name","method":"asc"}]';
    // Act
    const url = component.generateQuery();
    // Assert
    expect(url).toMatch('&pageSize=25');
    expect(url).toContain(`&sort=${component.sortValue}`);
  });

});
