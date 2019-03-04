import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageMainPage } from './page-main';

@NgModule({
  declarations: [
    PageMainPage,
  ],
  imports: [
    IonicPageModule.forChild(PageMainPage),
  ]
})
export class PageMainPageModule {}
