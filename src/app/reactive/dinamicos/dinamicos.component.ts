import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    favorites: this.fb.array([
      //Here are the form controls
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    } 
    console.log(this.myForm.value);
  }

  addFavorite() {
    if(this.newFavorite.invalid) {
      return;
    }

    this.favoritesArr.push(this.fb.control(this.newFavorite.value, Validators.required));
    //this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors
          && this.myForm.controls[field].touched;
  }

  delete(index: number) {
    this.favoritesArr.removeAt(index);
  }

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }
}
