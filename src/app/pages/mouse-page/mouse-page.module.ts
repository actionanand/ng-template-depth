import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MousePageComponent } from './mouse-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MouseModule } from './mouse/mouse.module';



@NgModule({
  declarations: [
    MousePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MouseModule
  ],
  exports: [MousePageComponent]
})
export class MousePageModule { }
