import { TestBed } from '@angular/core/testing';

import { CrudJsonService } from './crud-json.service';

describe('CrudJsonService', () => {
  let service: CrudJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
