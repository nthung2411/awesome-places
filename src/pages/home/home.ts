import { PlacePage } from '../place/place';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.model';
import { AddPlacePage } from '../add-place/add-place'
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addPlacePage = AddPlacePage;
  places: Place[] = [];

  constructor(public navCtrl: NavController, private placeService: PlaceService) {

  }

  public ionViewWillEnter() {
    this.places = this.placeService.loadPlaces();
  }

  public onRefresh() {
    this.places = this.placeService.loadPlaces();
  }

  public onOpenPlace(place: Place, index: number) {
    this.navCtrl.push(PlacePage, {
      place: place,
      index: index
    });
  }
}
