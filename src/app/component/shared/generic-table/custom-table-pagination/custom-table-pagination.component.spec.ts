import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTablePaginationComponent } from './custom-table-pagination.component';

describe('CustomTabelPaginationComponent', () => {
  let component: CustomTablePaginationComponent;
  let fixture: ComponentFixture<CustomTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
