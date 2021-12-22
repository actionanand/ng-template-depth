import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MousePageModule } from './pages/mouse-page/mouse-page.module';
import { MouseModule } from './pages/mouse-page/mouse/mouse.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MouseModule,
    MousePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
