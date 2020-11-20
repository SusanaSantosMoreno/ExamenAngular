import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent implements OnInit {

  public personajes: Array<Personaje>;
  public idSerie: string;

  constructor(private _service: PersonajesService, 
    private _router: ActivatedRoute) { 
    this.personajes = [];
  }

  ngOnInit(): void {
    this._router.params.subscribe((params:Params) => {
      if(params.idSerie != null) {
        this.idSerie=params.idSerie;
        this.getPersonajesSerie(params.idSerie);
      }
    })
  }

  getPersonajesSerie(idSerie) {
    this._service.getPersonajes(idSerie).subscribe(response => {
      this.personajes = response;
    })
  }

}
