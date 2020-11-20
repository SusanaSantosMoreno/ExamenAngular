import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from 'src/app/models/Serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styles: [
  ]
})
export class SeriesComponent implements OnInit {

  public serie: Serie;

  constructor(private _service: SeriesService, 
    private _router: ActivatedRoute) { 
    this.serie = null;
  }

  ngOnInit(): void {
    this._router.params.subscribe((params:Params) => {
      if(params.idSerie != null) {
        this.getSerie(params.idSerie);
      }
    })
  }

  getSerie(idSerie){
    this._service.getSerie(idSerie).subscribe(response  => {
      this.serie = response;
    })
  }

}
