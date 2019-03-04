import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams/*, ActionSheetController*/  } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  humedad: string; nivelagua: string; nombre: string; temperatura: string; tipo: string;

  levelwater: string; name: string; type: string;
  //typeActionSheet: string;

constructor(public navCtrl: NavController, public navParams: NavParams, private dbFirebase :FirebaseDbProvider,public auth : AuthProvider/*,public actionSheetController: ActionSheetController*/) {
  }
 /*  public presentActionSheet() {
      let actionSheet = this.actionSheetController.create({
        title: 'Seleccione tipo de dispositivo',
        buttons: [{
          text: 'Greensly',
          //role: 'destructive',
          icon: 'paw',
          handler: () => {
            console.log('Greensly clicked');
           // typeActionSheet = '1'.
          }
        }, {
          text: 'Device2',
          icon: 'paw',
          handler: () => {
            console.log('Other Device 2 clicked');
          }
        }, {
          text: 'Device3',
          icon: 'paw',
          handler: () => {
            console.log('Other Device 3 clicked');
          }
        }]
      });
      actionSheet.present();
    }*/
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  public guardarDevice()
  {

    let device =
    {
      humedad:  "Aun no leído",
      nivelagua: this.levelwater,
      nombre: this.name,
      temperatura: "Aun no leído",
      tipo: this.tipo,
    }

    this.dbFirebase.guardaDevice(device).then(res=>{
        console.log('Dispositivo guardado en firebase:');
            interface info{
            humedad:string;
            nivelagua: string;
            nombre: string;
            temperatura: string;
            tipo: string;
            }
            function msg(datos:info){
            return "Los datos guardados son:"+"\n Tipo " + datos.tipo + "\n Nombre "+ datos.nombre + "\n Temp "+ datos.temperatura + "\n Humedad "+ datos.humedad + "\n Nivel Agua "+ datos.nivelagua; 
            }
            //
       // alert(msg(device));
    })
    this.navCtrl.pop();
  }
  cerrarSesion(){
    this.auth.logout();
}
}
