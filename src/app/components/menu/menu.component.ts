import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public series: Array<Serie>;

  constructor(private _service: SeriesService) { 
    this.series = [];
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    })
  }

}
