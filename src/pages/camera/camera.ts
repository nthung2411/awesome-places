import { ToastController } from 'ionic-angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';

declare var cordova: any;

@Component({
    templateUrl: 'camera.html',
    selector: 'camera-component'
})

export class CameraComponent {
    @Input() imageUrl: string;
    @Output() onPhotoTaken: EventEmitter<string> = new EventEmitter<string>();

    public currentName = '';
    public path = '';
    public dataDirectoryPath = cordova.file.dataDirectory;
    public errorCode = 0;
    public errorMessage = '';
    constructor(private camera: Camera,
        private toastCtrl: ToastController,
        private file: File) {
    }

    public onTakePhoto() {
        const options: CameraOptions = {
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options)
            .then(res => {
                this.currentName = res.replace(/^.*[\\\/]/g, '');
                this.path = res.replace(this.currentName, '');

                this.file.moveFile(this.path, this.currentName, this.dataDirectoryPath, this.currentName)
                    .then((data: Entry) => {
                        this.imageUrl = data.nativeURL;
                        this.onPhotoTaken.emit(this.imageUrl);
                        this.camera.cleanup();
                        this.file.removeFile(this.path, this.currentName);
                    })
                    .catch((error: FileError) => {
                        this.errorCode = error.code;
                        this.errorMessage = error.message;
                        this.imageUrl = '';
                        const toast = this.toastCtrl.create({
                            message: 'Could not save the image. Please try again',
                            duration: 2500
                        });
                        toast.present();

                        // clear all cache
                        this.camera.cleanup();
                    });
            })
            .catch(error => {
                const toast = this.toastCtrl.create({
                    message: 'Camera error: ' + error.message,
                    duration: 2000
                });
            });
    }
}
