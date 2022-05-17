import { TestBed } from '@angular/core/testing';

import { BasseConfigService } from './basse-config.service';

describe('BasseConfigService', () => {
  let service: BasseConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasseConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
