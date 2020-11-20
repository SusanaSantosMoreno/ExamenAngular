import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-insert-personaje',
  templateUrl: './insert-personaje.component.html',
  styles: [
  ]
})
export class InsertPersonajeComponent implements OnInit {

  public series: Array<Serie>;
  public serieSeleccionada: string;
  
  @ViewChild('inputNombre') inputNombre : ElementRef;
  @ViewChild('inputImagen') inputImagen : ElementRef;

  constructor(private _router: Router, private _serviceSeries: SeriesService, private _servicePersonaje: PersonajesService) { 
    this.series = [];
    this.inputNombre = ElementRef.prototype;
    this.inputImagen = ElementRef.prototype;
  }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries () {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  crearPersonaje(){
    var personaje = new Personaje(1, this.inputNombre.nativeElement.value, this.inputImagen.nativeElement.value, parseInt(this.serieSeleccionada));
    this._servicePersonaje.crearPersonaje(personaje).subscribe(response => {
      this._router.navigate(['/']);
    }), error => {
        console.log('Error al crear el personaje.');
    }
  }
}
