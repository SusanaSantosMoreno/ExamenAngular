import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesService } from './services/series.service';
import { SeriesComponent } from './components/series/series.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesService } from './services/personajes.service';
import { InsertPersonajeComponent } from './components/insert-personaje/insert-personaje.component';
import { EditPersonajeComponent } from './components/edit-personaje/edit-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SeriesComponent,
    PersonajesComponent,
    InsertPersonajeComponent,
    EditPersonajeComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProvider, SeriesService, PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
