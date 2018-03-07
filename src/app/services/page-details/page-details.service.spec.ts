import { TestBed, inject } from '@angular/core/testing';

import { PageDetailsService } from './page-details.service';

describe('PageDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageDetailsService]
    });
  });

  it('should be created', inject([PageDetailsService], (service: PageDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
