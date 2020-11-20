import { Component, ElementRef, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { Personaje } from 'src/app/models/Personaje';
import { Router } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-edit-personaje',
  templateUrl: './edit-personaje.component.html',
  styles: [
  ]
})
export class EditPersonajeComponent implements OnInit {

  public series: Array<Serie>;
  public personajes: Array<Personaje>;
  public serie: Serie;
  public personaje: Personaje;
  public serieSeleccionada: string;
  public personajeSeleccionado: string;

  constructor(private _router: Router, private _serviceSeries: SeriesService, private _servicePersonaje: PersonajesService) { 
    this.series = [];
    this.personajes = [];
    this.serie = null;
    this.personaje = null;
  }

  ngOnInit(): void {
    this.getSeries();
    this.getPersonajes();
  }

  getSeries () {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  getPersonajes () {
    this._servicePersonaje.getAllPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }

  getPersonaje() {
    this._servicePersonaje.getPersonaje(this.personajeSeleccionado).subscribe(response => {
      this.personaje = response;
    })
  }

  getSerie () {
    this._serviceSeries.getSerie(this.serieSeleccionada).subscribe(response => {
      this.serie = response;
    })
  }

  modificarPersonaje() {
    this._servicePersonaje.modificarPersonaje(this.personajeSeleccionado, this.serieSeleccionada).subscribe( response => {
      this._router.navigate([`/serie/${this.serieSeleccionada}`]);
    })
  }


}
