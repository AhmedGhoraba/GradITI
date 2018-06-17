import { TestBed, inject } from '@angular/core/testing';

import { QueryHService } from './query-h.service';

describe('QueryHService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryHService]
    });
  });

  it('should be created', inject([QueryHService], (service: QueryHService) => {
    expect(service).toBeTruthy();
  }));
});
