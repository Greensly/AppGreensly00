import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    console.log('Hello FirebaseDbProvider Provider');
  }
  devices = [];
public guardaDevice(device){
  if(!device.tipo){
    device.tipo  = String(Date.now());
  }
    return this.afDB.database.ref('devices/'+this.auth.getUser()+'/'+device.tipo).set(device)
 }

public getDevices(){
  return this.afDB.list('devices/'+this.auth.getUser());  
  }

public getDevice(tipo){
  return this.afDB.object('devices/'+this.auth.getUser()+'/'+tipo);  
  }
public deleteDevice(tipo){
  this.afDB.database.ref('devices/'+this.auth.getUser()+'/'+tipo).remove();
  }
}
