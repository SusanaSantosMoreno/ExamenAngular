import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class SeriesService {

     constructor (private _http: HttpClient) {}

    getSeries () : Observable<any> {
        return this._http.get(`${Global.urlSeries}/api/Series`);
    }

    getSerie (idSerie): Observable<any> {
        return this._http.get(`${Global.urlSeries}/api/Series/${idSerie}`);
    }
}
