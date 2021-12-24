import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MousePageComponent } from './pages/mouse-page/mouse-page.component';
import { ToggleCompoundPageComponent } from './pages/toggle-compound-page /toggle-compound-page.component';
import { TogglePageComponent } from './pages/toggle-simple-page/toggle-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' },
  { path: 'where-my-mouse-moves', component: MousePageComponent },
  { path: 'simple-toggle', component: TogglePageComponent },
  { path: 'compound-toggle', component: ToggleCompoundPageComponent },
  { path: '**', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
