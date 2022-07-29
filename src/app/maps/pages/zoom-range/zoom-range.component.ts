import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as MapboxLanguage from '@mapbox/mapbox-gl-language';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap: ElementRef; 

  zoomLevel: number = 6;
  map: mapboxgl.Map;
  center: [number, number] = [-71.2514065, 18.6691754];

  constructor() { }

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom

      //projection: 'globe' // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });
    const language = new MapboxLanguage();
    this.map.addControl(language);

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if(this.map.getZoom() > 16) {
        this.map.zoomTo(16);
      }
    });

    this.map.on('move', (event) => {
      const target = event.target;
      const {lng, lat} = target.getCenter();
      this.center = [lng, lat];
    })
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }

}
