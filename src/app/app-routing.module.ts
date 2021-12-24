import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MousePageComponent } from './pages/mouse-page/mouse-page.component';
import { ToggleCompoundPageComponent } from './pages/toggle-compound/toggle-compound-page /toggle-compound-page.component';
import { ToggleCompoundExtraPageComponent } from './pages/toggle-compound/toggle-compound-page-extra/toggle-compound-extra-page.component';
import { ToggleCompoundComponent } from './pages/toggle-compound/toggle-compound.component';
import { TogglePageComponent } from './pages/toggle-simple-page/toggle-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' },
  { path: 'where-my-mouse-moves', component: MousePageComponent },
  { path: 'toggle', component: ToggleCompoundComponent, 
    children: [
      // { path: 'simple', component: TogglePageComponent },
      { path: 'compound', component: ToggleCompoundPageComponent },
      { path: 'compound-extra', component: ToggleCompoundExtraPageComponent }
    ] 
  },
  { path: 'simple-toggle', component: TogglePageComponent },
  { path: '**', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
