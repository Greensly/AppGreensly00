import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralDevicePage } from './general-device';

@NgModule({
  declarations: [
    GeneralDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralDevicePage),
  ],
})
export class GeneralDevicePageModule {}
