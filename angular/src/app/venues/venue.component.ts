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

  constructor(
    private venueService: VenueService
  ) { }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.getVenues(position.coords.latitude, position.coords.longitude);
      });
    } else {
    }
  }

  getVenues(lat: number, lng: number) {
    this.venueService.getVenues(lat, lng).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.venues = res as Venue[];
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }
}
