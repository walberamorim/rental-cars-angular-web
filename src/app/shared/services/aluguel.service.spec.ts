/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AluguelService } from './aluguel.service';

describe('Service: Aluguel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AluguelService]
    });
  });

  it('should ...', inject([AluguelService], (service: AluguelService) => {
    expect(service).toBeTruthy();
  }));
});
