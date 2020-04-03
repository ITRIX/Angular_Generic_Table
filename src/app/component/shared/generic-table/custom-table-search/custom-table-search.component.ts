import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericTableService } from '../../generic-table.service';

@Component({
  selector: 'app-custom-table-search',
  templateUrl: './custom-table-search.component.html',
  styleUrls: ['./custom-table-search.component.scss']
})
export class CustomTableSearchComponent implements OnInit {
  form: FormGroup;

  constructor(private genericTableService: GenericTableService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userSearchField: new FormControl(''),
    });
    this.userSearchFieldControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(val => {
      this.genericTableService.tabelEvents.next({ event: 'SEARCH', value: val });
    });
  }

  /**
   * userSearchFieldControl
   *
   * @description - returns FormControl object
   */
  get userSearchFieldControl(): AbstractControl {
    return this.form.get('userSearchField');
  }

}
