import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventDirective } from '../shared/event.directive';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { WatchedComponent } from './components/watched/watched.component';
import { WatchLaterComponent } from './components/watch-later/watch-later.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    LoginComponent,
    EventDirective,
    FavouriteComponent,
    WatchedComponent,
    WatchLaterComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [HomeComponent]
})
export class FeatureModule { }
