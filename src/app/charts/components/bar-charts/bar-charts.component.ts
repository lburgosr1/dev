import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartData: any;
  @Input() barChartLabels: any;
  @Input() isHorizontal: boolean = false;

  private verticalOrHorizontal: any = 'x'


  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: this.verticalOrHorizontal,
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    if(this.isHorizontal) {
      this.barChartOptions.indexAxis = 'y';
    }
  }

}
