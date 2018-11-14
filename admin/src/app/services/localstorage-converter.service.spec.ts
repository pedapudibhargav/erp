import { TestBed, inject } from '@angular/core/testing';

import { LocalstorageConverterService } from './localstorage-converter.service';

describe('LocalstorageConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageConverterService]
    });
  });

  it('should be created', inject([LocalstorageConverterService], (service: LocalstorageConverterService) => {
    expect(service).toBeTruthy();
  }));
});
