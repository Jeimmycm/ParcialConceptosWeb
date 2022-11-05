/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CafeService]

    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
