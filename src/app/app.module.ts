import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MousePageModule } from './pages/mouse-page/mouse-page.module';
import { NavBarModule } from './pages/nav-bar/nav-bar.module';
import { ToggleCompoundPageModule } from './pages/toggle-compound/toggle-compound-page /toggle-compound-page.module';
import { ToggleCompoundExtraPageModule } from './pages/toggle-compound/toggle-compound-page-extra/toggle-compound-extra-page.module';
import { ToggleCompoundModule } from './pages/toggle-compound/toggle-compound.module';
import { TogglePageModule } from './pages/toggle-simple-page/toggle-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MousePageModule,
    TogglePageModule,
    ToggleCompoundModule,
    ToggleCompoundPageModule,
    ToggleCompoundExtraPageModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
