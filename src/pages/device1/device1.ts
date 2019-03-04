import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { DevicePage } from '../device/device';

@IonicPage()
@Component({
  selector: 'page-device1',
  templateUrl: 'device1.html',
})
export class Device1Page {
devices=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider,public dbFirebase :FirebaseDbProvider) {
    this.dbFirebase.getDevices().valueChanges().subscribe(dev=>{
      console.log(dev);      
      this.devices = dev;
    });
  }

  public goToDevice(tipo) {
    this.navCtrl.push(DevicePage, {tipo:tipo});
    }
  config() {
    this.navCtrl.push("ConfigPage");
    }

  cerrarSesion(){
      this.auth.logout();
    }

}
