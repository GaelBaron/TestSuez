import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartTimeMIComponent } from './part-time-mi/part-time-mi.component';
import { FullTimeMIComponent } from './full-time-mi/full-time-mi.component';
import { InterimAddecoComponent } from './interim-addeco/interim-addeco.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartTimeMIComponent,
    FullTimeMIComponent,
    InterimAddecoComponent,
    ProfileComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
