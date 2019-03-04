import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { NgContentAst } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  device = {nivelagua: null,nombre: null,humedad: null, temperatura: null,tipo: null};
  tipo =null;
  levelwater: string; name: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth : AuthProvider,public dbFirebase :FirebaseDbProvider,public alertCtrl : AlertController) {
    this.tipo = navParams.get('tipo');
    if(this.tipo != 0){
      this.dbFirebase.getDevice(this.tipo).valueChanges().subscribe(device=>{
 
        //alert("Leyendo datos Firebase");
        console.log(device);
        this.device.tipo = device['tipo'];
        this.device.nombre = device['nombre'];
        this.device.nivelagua = device['nivelagua'];
        this.device.temperatura = device['temperatura'];
        this.device.humedad = device['humedad'];
      });
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
  cerrarSesion(){
    this.auth.logout();
  }

  deleteDevice(tipo){

    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sitio?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
            //this.navCtrl.pop();
          }
        },
        {
          text: 'Si',
          handler: () => {
               // AquÍ borramos el sitio en firebase
              //this.navCtrl.pop();
              this.dbFirebase.deleteDevice(this.tipo);
           }
        }
      ]
    });
    alert.present();
 }

 public editarDevice()
 {
   this.device.nombre= this.name,
   this.device.nivelagua= this.levelwater, 
   this.dbFirebase.guardaDevice(this.device).then(res=>{});
   this.navCtrl.pop();
  }
}
