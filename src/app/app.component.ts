import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxToken; //mapboxgl.accessToken = 'pk.eyJ1IjoibGJ1cmdvc3IxIiwiYSI6ImNsNXk4ZGphMDExMjIzY2wzaWpwbnpvbGwifQ.cI3lwGMP_d3DmSfentbE5A';

  }
}
