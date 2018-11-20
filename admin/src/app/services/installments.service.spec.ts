import { TestBed, inject } from '@angular/core/testing';

import { InstallmentsService } from './installments.service';

describe('InstallmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallmentsService]
    });
  });

  it('should be created', inject([InstallmentsService], (service: InstallmentsService) => {
    expect(service).toBeTruthy();
  }));
});
