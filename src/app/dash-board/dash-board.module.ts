
/**
 * Created by nikea on 7/15/2017.
 */
//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dash-board.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './dash.route';
 import { CommonModule1 } from '../common/common.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashBoardComponent,
  ],
  imports: [
    //BrowserModule,
    RouterModule.forChild(ROUTES),
    CommonModule1,
   CommonModule,

  ],
  exports : [ RouterModule ],
  providers : []
})
export class DashBoardModule {

  constructor() {
    console.log('DashModule');
  }
}

