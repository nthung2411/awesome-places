import { Location } from '../../models/location.model';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Component } from '@angular/core';
import { ModalController, NavController, ToastController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  public location: Location = <Location>{
    lattitude: 10.8231,
    longitude: 106.6297
  };
  public imageUrl = '';
  public locationIsSet = false;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,

    private geolocation: Geolocation,
    private camera: Camera) {
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
    const loader = this.loadingCtrl.create({
      content: 'Getting your location...'
    });
    loader.present();

    this.geolocation.getCurrentPosition().then(res => {
      this.location.lattitude = res.coords.latitude;
      this.location.longitude = res.coords.longitude;
      this.locationIsSet = true;

      loader.dismiss();
    }).catch(error => {
      const toast = this.toastCtrl.create({
        message: 'Could not get location, please pick it manually!',
        duration: 2500
      });
      toast.present();
      loader.dismiss();
    });
  }

  public onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      encodingType: this.camera.EncodingType.PNG
    };
    this.camera.getPicture(options)
      .then(res => {
        this.imageUrl = res;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
