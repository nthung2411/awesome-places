import { Location } from '../models/location.model';
import { Place } from '../models/place.model';
export class PlaceService {
    private places: Place[] = [];

    public addPlace(title: string, description: string, location: Location, imageUrl: string) {
        const place = new Place(title, description, location, imageUrl);
        this.places.push(place);
    }

    public loadPlaces() {
        return this.places.slice();
    }
}
