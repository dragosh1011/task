import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VenueService } from './venues/venue.service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { VenueComponent } from './venues/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [VenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
