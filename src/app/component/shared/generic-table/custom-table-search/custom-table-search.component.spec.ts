import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableSearchComponent } from './custom-table-search.component';

describe('CustomTabelSearchComponent', () => {
  let component: CustomTableSearchComponent;
  let fixture: ComponentFixture<CustomTableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
