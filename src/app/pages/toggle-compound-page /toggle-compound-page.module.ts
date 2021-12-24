import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleCompoundPageComponent } from './toggle-compound-page.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SwitchComponent } from './switch/switch.component';
import { SharedModule } from '../../shared/shared.module';
import { ToggleButtonComponent } from './toggle/toggle-button/toggle-button.component';
import { ToggleOnComponent } from './toggle/toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle/toggle-off/toggle-off.component';


@NgModule({
  declarations: [
    ToggleCompoundPageComponent,
    ToggleComponent,
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToggleCompoundPageModule { }
