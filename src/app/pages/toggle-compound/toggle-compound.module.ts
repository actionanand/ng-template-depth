import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleCompoundComponent } from './toggle-compound.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ToggleCompoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToggleCompoundModule { }
