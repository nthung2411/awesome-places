import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  public onLocate() {

  }

  public onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage);
    modal.present();
  }

  public onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
