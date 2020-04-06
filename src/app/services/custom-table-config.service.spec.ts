import { TestBed } from '@angular/core/testing';

import { CustomTableConfigService } from './custom-table-config.service';

describe('CustomTabelConfigService', () => {
  let service: CustomTableConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTableConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
