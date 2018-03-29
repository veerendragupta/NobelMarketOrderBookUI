import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material'

import { AppComponent } from './app.component';
import { RealtimeOrderBookComponent } from './realtime-order-book/realtime-order-book.component';
import { OrderBookSnapshotComponent } from './order-book-snapshot/order-book-snapshot.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtimeOrderBookComponent,
    OrderBookSnapshotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
