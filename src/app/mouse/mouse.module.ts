import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MouseComponent } from './mouse.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MouseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MouseComponent]
})
export class MouseModule { }
