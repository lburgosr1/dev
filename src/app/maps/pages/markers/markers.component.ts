import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as MapboxLanguage from '@mapbox/mapbox-gl-language';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface IColorMarker {
  color: string;
  marker: mapboxgl.Marker;
  center?: [number, number];
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent implements AfterViewInit {

  @ViewChild('map') divMap: ElementRef;
  zoomLevel: number = 13;
  map: mapboxgl.Map;
  center: [number, number] = [-69.94680196984339, 18.489202466590267];
  bgColor: string;
  markers: Array<IColorMarker> = new Array();

  constructor() { }

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom

      //projection: 'globe' // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });

    this.readLocalStorage();

    /* const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hello' */

    //const marker = new mapboxgl.Marker();

    /* new mapboxgl.Marker({
      element: markerHtml
    }).setLngLat(this.center).addTo(this.map); */

  }

  addMarker() {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat(this.center)
      .addTo(this.map);

    this.bgColor = color;
    this.markers.push({
      color,
      marker: newMarker
    });

    this.saveLocalStorageMarkers();

    newMarker.on('dragend', (e) => {
      this.saveLocalStorageMarkers();
    });

  }

  goToMarker(marker: mapboxgl.Marker) {
    this.map.flyTo({
      center: marker.getLngLat(),
      duration: 7000, // Animate over 07 seconds
      essential: true
    });
  }

  saveLocalStorageMarkers() {
    const lngLatArr: Array<IColorMarker> = new Array();
    this.markers.forEach(m => {
      const color = m.color;
      const { lng, lat } = m.marker.getLngLat();

      lngLatArr.push({
        color: color,
        center: [lng, lat]
      } as IColorMarker);
    })

    localStorage.setItem('marker', JSON.stringify(lngLatArr));
  }

  deleteMarker(i: number) {
    this.markers[i].marker?.remove();
    this.markers.splice(i, 1);
    this.saveLocalStorageMarkers();
  }

  readLocalStorage() {
    if (!localStorage.getItem('marker')) {
      return;
    }

    const lngLatArr: Array<IColorMarker> = JSON.parse(localStorage.getItem('marker'));

    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      }).setLngLat(m.center)
        .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: m.color
      });

      newMarker.on('dragend', (e) => {
        this.saveLocalStorageMarkers();
      });

    });
  }
}
