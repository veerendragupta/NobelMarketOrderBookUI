/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RealtimeOrderBookServiceService } from './realtime-order-book-service.service';

describe('RealtimeOrderBookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeOrderBookServiceService]
    });
  });

  it('should ...', inject([RealtimeOrderBookServiceService], (service: RealtimeOrderBookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
