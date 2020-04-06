import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableComponent } from './custom-table.component';
import { GenericTableService } from '../generic-table.service';
import { TranslationService } from '../translation/translation.service';
import { TranslatePipe } from '../translation/translate.pipe';

describe('CustomTabelComponent', () => {
  let component: CustomTableComponent;
  let fixture: ComponentFixture<CustomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTableComponent, TranslatePipe],
      providers: [GenericTableService, TranslationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableComponent);
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
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit()', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should check data render in table', () => {
    // Arrange
    component.configObject.headerData = [{
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
    }];

    component.configObject.data = [{
      id: 1,
      name: 'Prakash',
      status: false,
      salary: 1000,
      currencyValue: 'EUR',
      dob: '674604000000'
    },
    {
      id: 2,
      name: 'Alex',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR'
    }];
    component.configObject.allowInlineEdit = true;
    // Act
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    // Assert
    expect(tableRows.length).toBe(3);

    // Header row
    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('ID');
    expect(headerRow.cells[1].innerHTML).toContain('Name');

    // Data rows 1
    const row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toContain('1');
    expect(row1.cells[1].innerHTML).toContain('Prakash');

    // Data row 2
    const row2 = tableRows[2];
    expect(row2.cells[0].innerHTML).toContain('2');
    expect(row2.cells[1].innerHTML).toContain('Alex');

  });

  it('should update allowEdit value when user click on enable/disable inline edit button ', () => {
    // Arrange
    component.configObject.allowInlineEdit = true;
    // Act
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.inline-edit-btn');
    component.allowInlineEdit();
    // Assert
    expect(component.allowEdit).toBeTruthy();
    expect(button.innerHTML).toEqual('Enable inline edit');
  });

});
