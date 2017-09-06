import { Location } from '../../models/location.model';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location = <Location>{
    lattitude: 10.8231,
    longtitude: 106.6297
  };
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController) {
  }

  public onLocate() {

  }

  public onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, { location: this.location });
    modal.present();
  }

  public onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
