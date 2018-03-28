import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderBookSnapshotComponent } from 'app/order-book-snapshot/order-book-snapshot.component';
import { RealtimeOrderBookComponent } from 'app/realtime-order-book/realtime-order-book.component';

const routes: Routes =  [
  { path: '/noble-markets-realtime-order-book', component:RealtimeOrderBookComponent  },
  { path: '/noble-markets-order-book-snapshot', component: OrderBookSnapshotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
