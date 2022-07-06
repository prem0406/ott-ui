import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { DetailComponent } from './feature/components/detail/detail.component';
import { FavouriteComponent } from './feature/components/favourite/favourite.component';
import { HomeComponent } from './feature/components/home/home.component';
import { LoginComponent } from './feature/components/login/login.component';
import { WatchLaterComponent } from './feature/components/watch-later/watch-later.component';
import { WatchedComponent } from './feature/components/watched/watched.component';
import { RouteGuardService } from './shared/routeGuard.service';

const routes: Routes = [{path:'', component: HomeComponent}, 
{path:'movie/:id', component: DetailComponent, canActivate: [RouteGuardService]}, 
{path:'add', component: AddMovieComponent, canActivate: [RouteGuardService]}, 
{path:'favourite', component: FavouriteComponent, canActivate: [RouteGuardService]}, 
{path:'watched', component: WatchedComponent, canActivate: [RouteGuardService]}, 
{path:'watch-later', component: WatchLaterComponent, canActivate: [RouteGuardService]}, 
{path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }