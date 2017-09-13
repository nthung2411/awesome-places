import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { Place } from '../models/place.model';

import { Storage } from '@ionic/storage';

@Injectable()
export class PlaceService {

    private places: Place[] = [
        new Place('Nice Church', 'Church', new Location(10, 60), ''),
        new Place('Nice Park', 'Park', new Location(10, 60), '')
    ];

    /**
     *
     */
    constructor(private storage: Storage) { }

    public addPlace(title: string, description: string, location: Location, imageUrl: string) {
        const place = new Place(title, description, location, imageUrl);
        this.places.push(place);
        this.storage.set('places', this.places).then().catch(
            err => {
                this.places.splice(this.places.indexOf(place), 1);
            }
        );
    }

    public loadPlaces() {
        return this.places.slice();
    }

    public fetchPlaces() {
        this.storage.get('places').then((places: Place[]) => {
            this.places = places ? places : [];
        });
    }

    public deletePlace(index: number) {
        this.places.splice(index, 1);
    }
}
