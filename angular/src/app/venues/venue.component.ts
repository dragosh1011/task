import { Component, OnInit } from '@angular/core';
import { Venue } from './venue';
import { VenueService } from './venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  providers: [VenueService]
})
export class VenueComponent implements OnInit {
  venues: Venue[] = [];
  loading = false;
  displayedColumns: string[] = ['name', 'lat', 'lng', 'distance', 'isOpen', 'website', 'photo'];
  lat: number;
  lng: number;

  constructor(
    private venueService: VenueService
  ) { }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getVenues();
      });
    } else {
    }
  }

  getVenues() {
    this.venueService.getVenues(this.lat, this.lng).subscribe(res => {
      console.log(res);
      this.venues = res as Venue[];
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }
}
