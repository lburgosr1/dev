import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Countrie, CountrieSmall } from '../interfaces/countrie.interface';
import { CountriesService } from '../services/countries-service.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  regions: Array<any>;
  countries: Array<CountrieSmall>;
  //borders: Array<string>;
  borders: Array<CountrieSmall>
  loading: boolean = false;


  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    countrie: ['', Validators.required],
    borders: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private countreisService: CountriesService) { }

  ngOnInit(): void {
    this.getRegions();
    this.getCountries();
    this.getCountriesForBorders();
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

  save() {

  }

}
