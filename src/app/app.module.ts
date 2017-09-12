import { PlaceService } from '../services/place.service';
import { CameraComponent } from '../pages/camera/camera';
import { SetLocationPage } from '../pages/set-location/set-location';
import { PlacePage } from '../pages/place/place';
import { AddPlacePage } from '../pages/add-place/add-place';
import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { HomePage } from '../pages/home/home'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AgmCoreModule } from '@agm/core';

import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

const pages = [
  MyApp,
  HomePage,
  AddPlacePage,
  PlacePage,
  SetLocationPage,

  CameraComponent
]

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHPKxfbPSHURl-SVRy-nFbqj7LoU1pLDE'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,

    PlaceService,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
