import { TestBed } from '@angular/core/testing';

import { TableDemo1Service } from './table-demo1.service';

describe('TableDemo1Service', () => {
  let service: TableDemo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDemo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
