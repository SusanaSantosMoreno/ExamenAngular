import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/Personaje';
import { Global } from './Global';

@Injectable()
export class PersonajesService {

     constructor (private _http: HttpClient) {}

    getPersonajes (idSerie) : Observable<any> {
        return this._http.get(`${Global.urlSeries}/api/Series/PersonajesSerie/${idSerie}`);
    }

    getAllPersonajes () : Observable<any> {
        return this._http.get(`${Global.urlSeries}/api/Personajes`);
    }

    getPersonaje(idPersonaje): Observable<any>{
        return this._http.get(`${Global.urlSeries}/api/Personajes/${idPersonaje}`);
    }

    crearPersonaje(personaje: Personaje): Observable<any> {
        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(`${Global.urlSeries}/api/Personajes`, json, {
            headers: header
        });
    }

    modificarPersonaje(idPersonaje: string, idSerie: string): Observable<any> {
        return this._http.put(`${Global.urlSeries}/api/Personajes/${idPersonaje}/${idSerie}`, null);
    }
}
