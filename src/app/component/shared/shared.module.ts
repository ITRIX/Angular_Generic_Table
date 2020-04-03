import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './generic-table/custom-table/custom-table.component';
import { FormsModule } from '@angular/forms';
import { CustomTableSearchComponent } from './generic-table/custom-table-search/custom-table-search.component';
import { CustomTablePaginationComponent } from './generic-table/custom-Table-pagination/custom-Table-pagination.component';
import { CustomTableFilterComponent } from './generic-table/custom-Table-filter/custom-Table-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
  declarations: [
    GenericTableComponent,
    CustomTableComponent,
    CustomTableSearchComponent,
    CustomTablePaginationComponent,
    CustomTableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GenericTableComponent
  ]
})
export class SharedModule { }
