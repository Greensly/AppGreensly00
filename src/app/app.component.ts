import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'PageMainPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth: AuthProvider) {
    platform.ready().then(() => {
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = 'GeneralDevicePage';
            
        }
          else{
            
            this.rootPage = 'PageMainPage';
          }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

