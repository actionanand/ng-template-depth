import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MousePageComponent } from './pages/mouse-page/mouse-page.component';
import { TogglePageComponent } from './pages/toggle-page/toggle-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' },
  { path: 'where-my-mouse-moves', component: MousePageComponent },
  { path: 'toggle', component: TogglePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
