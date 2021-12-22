import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogglePageComponent } from './toggle-page.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SwitchComponent } from './switch/switch.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    TogglePageComponent,
    ToggleComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TogglePageModule { }
