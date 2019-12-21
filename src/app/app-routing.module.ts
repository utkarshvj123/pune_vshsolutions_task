import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWebseriesComponent } from './list-webseries/list-webseries.component';
import { SelectedSeriesComponent } from './selected-series/selected-series.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
path:'list',
component:ListWebseriesComponent
  },
  {
    path:'details',
    component :SelectedSeriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
