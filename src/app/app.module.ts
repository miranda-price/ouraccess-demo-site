import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PathsComponent } from './paths/paths.component';
import { DirectionsComponent } from './directions/directions.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    UserInputComponent,
    PathsComponent,
    DirectionsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
