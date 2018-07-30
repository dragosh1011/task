import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { VenueService } from './venues/venue.service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { VenueComponent } from './venues/venue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [VenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
