export class Venue {
  constructor(
    public id?: string,
    public name?: string,
    public photo?: string,
    public lat?: number,
    public lng?: number,
    public distance?: number,
    public isOpen?: boolean,
    public website?: string,
  ) {

    }

  static createFromRow(rawVenue: any):Venue {
    return new Venue(
      rawVenue.id,
      rawVenue.name,
      rawVenue.photo,
      rawVenue.lat,
      rawVenue.lng,
      rawVenue.distance,
      rawVenue.isOpen,
      rawVenue.website,
    );
  }
}
