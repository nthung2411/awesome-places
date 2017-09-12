import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.model';
import { AddPlacePage } from '../add-place/add-place'
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  addPlacePage = AddPlacePage;
  places: Place[] = [];

  constructor(public navCtrl: NavController, private placeService: PlaceService) {

  }

  public ngOnInit(): void {
    this.places = this.placeService.loadPlaces();
  }
}
