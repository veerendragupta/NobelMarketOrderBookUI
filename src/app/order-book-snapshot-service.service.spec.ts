/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderBookSnapshotServiceService } from './order-book-snapshot-service.service';

describe('OrderBookSnapshotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderBookSnapshotServiceService]
    });
  });

  it('should ...', inject([OrderBookSnapshotServiceService], (service: OrderBookSnapshotServiceService) => {
    expect(service).toBeTruthy();
  }));
});
