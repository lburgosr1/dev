import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-double-charts',
  templateUrl: './double-charts.component.html',
  styleUrls: ['./double-charts.component.css']
})
export class DoubleChartsComponent implements OnInit {

  proveedoresData: ChartDataset[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30,450,200 ], label: 'Vendedor B' }
];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartDataset[] = [
    {data: [ 200,300,400,300,100 ], label: 'Carros', backgroundColor: 'blue', hoverBackgroundColor: '#2A4EF0' },
  ];

  /* 
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#90F54B', hoverBackgroundColor: '#2C83F2' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#FCC72D', hoverBackgroundColor: '#2C83F2' },
      { data: [ 45, 50, 15, 82, 96, 17, 70 ], label: 'Series C', backgroundColor: '#E65535', hoverBackgroundColor: '#2C83F2' }
    ]
  }; */

  constructor() { }

  ngOnInit(): void {
  }

}
