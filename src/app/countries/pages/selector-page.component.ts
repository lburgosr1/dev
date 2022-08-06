import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { ICountrie, ICountrieSmall, CountrieSmall } from '../interfaces/countrie.interface';
import { CountriesService } from '../services/countries-service.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit, AfterViewInit {

  regions: Array<any>;
  countries: Array<ICountrieSmall>;
  //borders: Array<string>;
  borders: Array<ICountrieSmall>
  loading: boolean = false;
  lgtLat: [number, number] = [0, 0];
  border: ICountrieSmall;
  zoomLevel: number = 3;
  map: mapboxgl.Map;
  @ViewChild('map') divMap: ElementRef;
  marker: mapboxgl.Marker;


  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    countrie: ['', Validators.required],
    borders: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private countreisService: CountriesService) {
    this.border = new CountrieSmall();
  }

  ngOnInit(): void {
    this.getRegions();
    this.getCountries();
    this.getCountriesForBorders();
  }

  ngAfterViewInit() {
    this.setMap();
  }

  setMap() {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL mapbox://styles/mapbox/satellite-streets-v11
      center: [this.border.latlng[1], this.border.latlng[0]], // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
      projection: 'globe' // display the map as a 3D globe
    });
    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });
    this.map.flyTo({
      center: [this.border.latlng[1], this.border.latlng[0]],
      duration: 7000, // Animate over 07 seconds
      essential: true
    });
    this.marker = new mapboxgl.Marker()
      .setLngLat([this.border.latlng[1], this.border.latlng[0]])
      .addTo(this.map)
  }

  getRegions() {
    this.regions = this.countreisService.regions;
  }

  getCountries() {

    this.myForm.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.myForm.get('countrie')?.reset('');
          this.loading = true;
        }),
        switchMap(region => this.countreisService.getCountriesForRegion(region))
      ).subscribe(countries => {
        this.countries = countries;
        this.loading = false;
      })

    /* this.myForm.get('region')?.valueChanges.subscribe({
      next: (region) => {
        this.countreisService.getCountriesForRegion(region).subscribe({
          next: (res) => {
            this.countries = res;
          }
        })
      },
      error: () => {

      }
    }); */
  }

  getCountriesForBorders() {

    this.myForm.get('countrie')?.valueChanges
      .pipe(
        tap(() => {
          this.loading = true;
          this.myForm.get('borders').reset('');
        }),
        switchMap(code => this.countreisService.getCountriesForCode(code)),
        switchMap(countrie => this.countreisService.getCountriesBorders(countrie[0]?.borders))
      ).subscribe(countries => {
        //this.borders = countrie[0]?.borders;
        this.borders = countries;
        this.loading = false;
      })
  }

  setBorder() {
    return this.borders.find(b => b.name.common === this.myForm.get('borders').value);
  }

  selectBorder() {
    this.border = this.setBorder();
    this.marker.remove();

    if (this.border) {
      this.map.flyTo({
        center: [this.border.latlng[1], this.border.latlng[0]],
        duration: 7000, // Animate over 07 seconds
        essential: true
      });
      this.marker = new mapboxgl.Marker()
        .setLngLat([this.border.latlng[1], this.border.latlng[0]])
        .addTo(this.map)
    }
  }
}
