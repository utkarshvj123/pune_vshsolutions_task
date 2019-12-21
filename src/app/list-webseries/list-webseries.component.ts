import { Component, OnInit, OnChanges } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-list-webseries',
  templateUrl: './list-webseries.component.html',
  styleUrls: ['./list-webseries.component.scss']
})
export class ListWebseriesComponent implements OnInit {

  constructor(private service: MyServiceService, private route: Router, private spinner: NgxSpinnerService) { }

  listWebSeries = [];
  listWebSeriesComplete = [];

  ngOnInit() {
    this.service.showSpinner();
    this.gettingListOfWebSeries();
  }
  valueFromInput: any;

  valuechange() {
   console.log(this.valueFromInput.length, ".......valueFromInput");
    this.listWebSeries = this.listWebSeriesComplete;
    this.valueFromInput = this.valueFromInput.toLowerCase();
    this.listWebSeries = this.listWebSeries.filter(series => {
      return series.name.toLowerCase().indexOf(this.valueFromInput) != -1;
    });
  }

  //----selcted value function
  selectedValue(value) {
    console.log(value);
    this.service.selectedWebSeries(value);
    this.route.navigate(['/details']);
  }
//----getting list by subscribing 
  gettingListOfWebSeries() {
    this.service.getListWebSeries().subscribe(res => {
      this.listWebSeries = res.data;
      this.listWebSeriesComplete = res.data;
      console.log(this.listWebSeries, ".......list webseries")
      this.service.hideSpinner();
    })
  }



}
