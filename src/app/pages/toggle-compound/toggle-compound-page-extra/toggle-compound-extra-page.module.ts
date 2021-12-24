import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleCompoundExtraPageComponent } from './toggle-compound-extra-page.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SwitchComponent } from './switch/switch.component';
import { SharedModule } from '../../../shared/shared.module';
import { ToggleButtonComponent } from './toggle/toggle-button/toggle-button.component';
import { ToggleOnComponent } from './toggle/toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle/toggle-off/toggle-off.component';
import { OtherComponent } from './other/other.component';


@NgModule({
  declarations: [
    ToggleCompoundExtraPageComponent,
    ToggleComponent,
    SwitchComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToggleCompoundExtraPageModule { }
