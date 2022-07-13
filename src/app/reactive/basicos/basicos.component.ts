import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /* 
    Usando FormControl
    myForm: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  }) */

  //Usando el FormBuilder
  /* myForm: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti', [ Validators.required, Validators.minLength(3) ] ],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  }); */
  myForm: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /* 
      Inicializando el formulario con valores por defecto
      this.myForm.setValue({
      nombre: ['RTX 4080ti', [ Validators.required, Validators.minLength(3) ] ],
      precio: [0, [Validators.required, Validators.min(0)]],
      existencias: [0, [Validators.required, Validators.min(0)]]
    }); */

    /* 
      Inicializando el formulario con valores por defecto
      usando el reset()
      this.myForm.reset({
      nombre: ['RTX 4080ti', [ Validators.required, Validators.minLength(3) ] ],
      precio: [0, [Validators.required, Validators.min(0)]],
      existencias: [0, [Validators.required, Validators.min(0)]]
    }); */
  }

  isValidField( field: string): boolean {
    return (this.myForm.controls[field].errors
            && this.myForm.controls[field].touched);
  }

  save(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm);
    this.myForm.reset();
  }

}
