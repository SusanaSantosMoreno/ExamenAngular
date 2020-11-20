import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPersonajeComponent } from './components/edit-personaje/edit-personaje.component';
import { HomeComponent } from './components/home/home.component';
import { InsertPersonajeComponent } from './components/insert-personaje/insert-personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'serie/:idSerie', component:SeriesComponent},
    {path: 'personajesSerie/:idSerie', component:PersonajesComponent},
    {path: 'nuevoPersonaje', component:InsertPersonajeComponent},
    {path: 'modificarPersonaje', component:EditPersonajeComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);