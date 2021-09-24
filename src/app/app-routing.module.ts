import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartboxComponent } from './startbox/startbox.component';

const routes: Routes = [
  {path: 'mainpage', component : StartboxComponent},
  {path: '', redirectTo : 'mainpage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
