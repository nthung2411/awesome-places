import { ToastController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    templateUrl: 'camera.html',
    selector: 'camera-component'
})

export class CameraComponent {
    @Input() imageUrl: string;

    constructor(private camera: Camera,
        private toastCtrl: ToastController) {
    }

    public onTakePhoto() {
        const options: CameraOptions = {
            quality: 100,
            // destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options)
            .then(res => {
                this.imageUrl = res;
            })
            .catch(error => {
                const toast = this.toastCtrl.create({
                    message: 'Camera error: ' + error.message,
                    duration: 2000
                });
            });
    }
}
