import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './Components/periodic-table/periodic-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PElementDisplayComponent } from './Components/pelement-display/pelement-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    PElementDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
