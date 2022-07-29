import { Component } from '@angular/core';

interface IMenuItem {
  path: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menuItems: Array<IMenuItem> = [
    {
      path: '/maps/fullscreen',
      name: 'FullScreem'
    },
    {
      path: '/maps/zoom-range',
      name: 'Zoom Range'
    },
    {
      path: '/maps/markers',
      name: 'Marcadores'
    },
    {
      path: '/maps/properties',
      name: 'Propiedades'
    }
  ];
}
