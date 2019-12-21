import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-series',
  templateUrl: './selected-series.component.html',
  styleUrls: ['./selected-series.component.scss']
})
export class SelectedSeriesComponent implements OnInit {

  constructor(private service: MyServiceService, private route: Router) {  }
  
  detailData: any;

  ngOnInit() {
    this.service.showSpinner();
    this.detailData = this.service.getSelectedWebSeries();
    this.service.hideSpinner();
    if (!this.detailData) return this.route.navigate(['/list'])
  }

}
