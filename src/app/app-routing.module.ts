import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './feature/components/detail/detail.component';
import { HomeComponent } from './feature/components/home/home.component';

const routes: Routes = [{path:'', component: HomeComponent}, {path:'movie', component: DetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
