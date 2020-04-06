import { TestBed } from '@angular/core/testing';

import { GenericTableService } from './generic-table.service';

describe('GenericTableService', () => {
  let service: GenericTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericTableService]
    });
    service = TestBed.inject(GenericTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
