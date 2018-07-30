import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Venue } from './venue';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VenueService {

  constructor(
    private http: HttpClient,
  ) { }

  getVenues(lat: number, lng: number): Observable<Venue[]> {
    return this.http.get(this.getRequestLink(lat, lng)).map(this.formatResponse).catch(err => {
      return Observable.throw(err);
    });
  }

  private formatResponse(response: any): Venue[] {
    const data = response.response.groups.map(group => {
      return group.items.map(item => VenueService.formatVenue(item.venue));
    });

    return [].concat.apply([], data);
  }

  private static formatVenue(rawVenue: any): Venue {
    const venue =  {
      id: rawVenue.id,
      name: rawVenue.name,
      photo: VenueService.getPhoto(rawVenue),
      lat: rawVenue.location.lat,
      lng: rawVenue.location.lng,
      distance: rawVenue.location.distance,
      isOpen: rawVenue.hours && rawVenue.hours.isOpen,
      website: rawVenue.url
    };

    return Venue.createFromRow(venue);
  }


  private static getPhoto(venue: any): string {
    //requested only one photo so this should pe path to it if exists
    const photo = venue.photos && venue.photos.groups && venue.photos.groups[0] && venue.photos.groups[0].items
      && venue.photos.groups[0].items[0];
    return photo? `${photo.prefix}${photo.width}x${photo.height}${photo.suffix}` : '';
  }

  getRequestLink(lat: number, lng: number): string {
    const token = 'NKRP0KY5ZDZIBMCU3TZS4BMP4ZMIQZBQPLBTCPXSIGPWFJ1L';
    const apiLink = `https://api.foursquare.com/v2/venues/explore`;
    return `${apiLink}?ll=${lat},${lng}&section=food&venuePhotos=1&oauth_token=${token}&v=20160629`;
  }

}

