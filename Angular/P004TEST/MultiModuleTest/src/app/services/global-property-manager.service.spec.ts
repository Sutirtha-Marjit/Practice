import { TestBed, inject } from '@angular/core/testing';

import { GlobalPropertyManagerService } from './global-property-manager.service';

describe('GlobalPropertyManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPropertyManagerService]
    });
  });

  it('should be created', inject([GlobalPropertyManagerService], (service: GlobalPropertyManagerService) => {
    expect(service).toBeTruthy();
  }));
});
