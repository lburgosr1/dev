import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ICountrieSmall } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-mini-maps',
  templateUrl: './mini-maps.component.html',
  styleUrls: ['./mini-maps.component.css']
})
export class MiniMapsComponent implements AfterViewInit {

  @Input() border: ICountrieSmall;
  @ViewChild('map') divMap: ElementRef;
  zoomLevel: number = 5;
  map: mapboxgl.Map;

  constructor() { }

  ngAfterViewInit(): void {
    
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji', // style URL
      center: [this.border.latlng[1], this.border.latlng[0]], // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom

      //projection: 'globe' // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });
    new mapboxgl.Marker()
      .setLngLat([this.border.latlng[1], this.border.latlng[0]])
      .addTo(this.map)

    this.map.flyTo({
      center: [this.border.latlng[1], this.border.latlng[0]],
      duration: 7000, // Animate over 07 seconds
      essential: true
    });
    
  }
}
