import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-maps',
  templateUrl: './mini-maps.component.html',
  styleUrls: ['./mini-maps.component.css']
})
export class MiniMapsComponent implements AfterViewInit {

  @Input() lngLat: [number, number];
  @ViewChild('map') divMap: ElementRef;
  zoomLevel: number = 13;
  map: mapboxgl.Map;

  constructor() { }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
      interactive: false

      //projection: 'globe' // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map)
  }

}
