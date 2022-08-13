import { Component, OnInit } from '@angular/core';

interface IMenu {
  path: string,
  text: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itemsMenu: Array<IMenu> = [
    {
      path: '/charts/barchart',
      text: 'Bar Chart'
    },
    {
      path: '/charts/doublecharts',
      text: 'Double Charts'
    },
    {
      path: '/charts/doughnutchart',
      text: 'Doughnut Chart'
    },
    {
      path: '/charts/doughnuthttp',
      text: 'Doughnut Http'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
