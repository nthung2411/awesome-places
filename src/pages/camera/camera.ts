import { ToastController } from 'ionic-angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    templateUrl: 'camera.html',
    selector: 'camera-component'
})

export class CameraComponent {
    @Input() imageUrl: string;
    @Output() onPhotoTaken: EventEmitter<string> = new EventEmitter<string>();
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
                this.onPhotoTaken.emit(this.imageUrl);
            })
            .catch(error => {
                const toast = this.toastCtrl.create({
                    message: 'Camera error: ' + error.message,
                    duration: 2000
                });
            });
    }
}
