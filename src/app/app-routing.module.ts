import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MousePageComponent } from './pages/mouse-page/mouse-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/where-my-mouse-moves', pathMatch: 'full' },
  { path: 'where-my-mouse-moves', component: MousePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
