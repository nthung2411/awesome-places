import { Location } from '../../models/location.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage implements OnInit {
  public location: Location;
  public marker: Location;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  public ngOnInit(): void {
    this.location = this.navParams.get('location') as Location;
    const locationIsSet = this.navParams.get('isSet') as boolean;
    if (locationIsSet) {
      this.marker = this.location;
    }
  }

  public onSetMarker(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  public onCancel() {
    this.viewCtrl.dismiss();
  }

  public onConfirm() {
    this.viewCtrl.dismiss({
      location: this.marker
    });
  }
}
