import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-general-device',
  templateUrl: 'general-device.html',
})
export class GeneralDevicePage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralDevicePage');
  }
  device1() {
    this.navCtrl.push("Device1Page");
    }
  /*config() {
    this.navCtrl.push("ConfigPage");
  }*/
  
  cerrarSesion(){
    this.auth.logout();
}
}
