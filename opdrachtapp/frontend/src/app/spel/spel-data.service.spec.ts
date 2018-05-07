import { TestBed, inject } from '@angular/core/testing';

import { SpelDataService } from './spel-data.service';

describe('SpelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpelDataService]
    });
  });

  it('should be created', inject([SpelDataService], (service: SpelDataService) => {
    expect(service).toBeTruthy();
  }));
});
