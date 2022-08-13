import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { IChart } from '../../interfaces/chart';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styleUrls: ['./doughnut-http.component.css']
})
export class DoughnutHttpComponent implements OnInit {

  private data: IChart;

  public doughnutChartData: ChartData<'doughnut'>;

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.inialice();
  }

  inialice() {
    this.chartsService.getDataFormate().subscribe({
      next: (res) => {
        this.data = res;
        this.setChart();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setChart(): void {
    this.doughnutChartData = {
      labels: this.data.labels,
      datasets: [
        { 
          data: this.data.values,
          backgroundColor: ['#C72EDB', '#6A27F2', '#F2274F']
        }
      ]
    };
  }

  /* inialice(): void {
    this.chartsService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.setChart();
      },
      error: (err) => {
        console.log(err);
      }
    });
  } */

  /* setChart(): void {
    if(!this.data) {
      return;
    }
    let values: number[] = Object.values(this.data);
    let labels: string[] = Object.keys(this.data);

    this.doughnutChartLabels = labels;

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: values,
          backgroundColor: ['#C72EDB', '#6A27F2', '#F2274F']
        }
      ]
    };
  } */
}
