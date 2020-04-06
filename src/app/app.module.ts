import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GenericTableModule } from './component/shared/generic-table/generic-table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicListComponent } from './component/dynamic-component/dynamic-list/dynamic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
