import { Location } from '../../models/location.model';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  public location: Location = <Location>{
    lattitude: 10.8231,
    longitude: 106.6297
  };

  public locationIsSet = false;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private geolocation: Geolocation) {
  }

  public onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage,
      { location: this.location, isSet: this.locationIsSet });
    modal.present();
    modal.onDidDismiss((data) => {
      if (!data) { return; }
      this.locationIsSet = true;
      this.location = data.location;
    });
  }

  public onSubmit(form: NgForm) {
    console.log(form.value);
  }

  public onLocate() {
    this.geolocation.getCurrentPosition().then(res => {
      this.location.lattitude = res.coords.latitude;
      this.location.longitude = res.coords.longitude;
      this.locationIsSet = true;
    }).catch(error => {
      console.log(error);
    });
  }
}
