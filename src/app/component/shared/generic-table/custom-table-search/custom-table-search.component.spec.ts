import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableSearchComponent } from './custom-table-search.component';
import { GenericTableService } from '../generic-table.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomTabelSearchComponent', () => {
  let component: CustomTableSearchComponent;
  let fixture: ComponentFixture<CustomTableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ CustomTableSearchComponent ],
      providers: [GenericTableService]
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
