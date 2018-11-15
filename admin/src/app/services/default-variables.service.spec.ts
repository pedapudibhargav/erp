import { TestBed, inject } from '@angular/core/testing';

import { DefaultVariablesService } from './default-variables.service';

describe('DefaultVariablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultVariablesService]
    });
  });

  it('should be created', inject([DefaultVariablesService], (service: DefaultVariablesService) => {
    expect(service).toBeTruthy();
  }));
});
