import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { DoubleChartsComponent } from './pages/double-charts/double-charts.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barchart', component: BarChartComponent },
      { path: 'doublecharts', component: DoubleChartsComponent },
      { path: 'doughnutchart', component: DoughnutChartComponent },
      { path: 'doughnuthttp', component: DoughnutHttpComponent },
      { path: '**', redirectTo: 'barchart' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
