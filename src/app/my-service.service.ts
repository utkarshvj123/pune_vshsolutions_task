import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  selectedWebSeriesName:any;
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
  listUrl = 'https://api.myjson.com/bins/j23xw';

  getListWebSeries(){
    return this.http.get<any>(this.listUrl).pipe(
      retry(1),
      catchError(this.handleError)
  );
  }

///---------Ngx spinner

showSpinner(){
  this.spinner.show()
}
//-----hide spinner
hideSpinner(){
  this.spinner.hide()
}





//-----Selected web-series
selectedWebSeries(series){
  this.selectedWebSeriesName=series;
  console.log(this.selectedWebSeriesName)
}

//----getting web-series
getSelectedWebSeries(){
  return this.selectedWebSeriesName;
}


  handleError(error) {
    let errorMessage = {};
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = {Error: error.error.message};
    } else {
        // server-side error
        errorMessage = {Message: error.message};
        // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}

}
