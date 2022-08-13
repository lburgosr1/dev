import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { ChartsRoutingModule } from './charts-routing.module';

import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { DoubleChartsComponent } from './pages/double-charts/double-charts.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';


@NgModule({
  declarations: [
    BarChartComponent, 
    DoubleChartsComponent, 
    DoughnutChartComponent, 
    DoughnutHttpComponent, 
    BarChartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})
export class ChartsModule { }
