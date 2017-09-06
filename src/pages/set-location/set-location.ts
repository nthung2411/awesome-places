import { Location } from '../../models/location.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage implements OnInit {
  public lat: number;
  public lng: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public ngOnInit(): void {
    const location = this.navParams.get('location') as Location;
    this.lat = location.lattitude;
    this.lng = location.longtitude;
  }
}
