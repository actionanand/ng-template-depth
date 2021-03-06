import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MousePageComponent } from './mouse-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MouseComponent } from './mouse/mouse.component';



@NgModule({
  declarations: [
    MousePageComponent,
    MouseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MousePageModule { }
