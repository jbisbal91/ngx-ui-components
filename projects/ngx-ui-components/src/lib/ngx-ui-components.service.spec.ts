import { TestBed } from '@angular/core/testing';

import { NgxUiComponentsService } from './ngx-ui-components.service';

describe('NgxUiComponentsService', () => {
  let service: NgxUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
