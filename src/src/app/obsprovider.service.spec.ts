import { TestBed, inject } from '@angular/core/testing';

import { ObsproviderService } from './obsprovider.service';

describe('ObsproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObsproviderService]
    });
  });

  it('should be created', inject([ObsproviderService], (service: ObsproviderService) => {
    expect(service).toBeTruthy();
  }));
});
