import { TestBed } from '@angular/core/testing';

import { NgxWordPullupService } from './ngx-word-pullup.service';

describe('NgxWordPullupService', () => {
  let service: NgxWordPullupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWordPullupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
