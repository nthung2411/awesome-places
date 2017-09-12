import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage implements OnInit {
  public place: Place = <Place>{};
  public index: number;
  constructor(private navParams: NavParams, private viewCtrl: ViewController,
    private placeService: PlaceService) {
  }

  public ngOnInit(): void {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

  public onLeave() {
    this.viewCtrl.dismiss();
  }
  public onDelete() {
    this.placeService.deletePlace(this.index);
    this.viewCtrl.dismiss();
  }
}
