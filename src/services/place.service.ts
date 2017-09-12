import { Location } from '../models/location.model';
import { Place } from '../models/place.model';
export class PlaceService {
    private places: Place[] = [
        new Place('Nice Church', 'Church', new Location(10, 60), ''),
        new Place('Nice Park', 'Park', new Location(10, 60), '')
    ];

    public addPlace(title: string, description: string, location: Location, imageUrl: string) {
        const place = new Place(title, description, location, imageUrl);
        this.places.push(place);
    }

    public loadPlaces() {
        return this.places.slice();
    }

    public deletePlace(index: number) {
        this.places.splice(index, 1);
    }
}
