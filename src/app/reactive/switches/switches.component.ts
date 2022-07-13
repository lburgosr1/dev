import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  });

  person = {
    genender: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.myForm.setValue(this.persona);
    //El control conditions sera null para este caso
    //porque el objeto persona no tiene dicha propiedad
    //this.myForm.reset(this.persona);

    this.myForm.reset(
      {...this.person, conditions: false}
    );

    /* this.myForm.get('conditions').valueChanges.subscribe( value => {
      console.log(value)
    }) */

    /* this.myForm.valueChanges.subscribe( form => {
      /* delete form.conditions;
      this.person = form;
      this.person = {
        genender: form.genender,
        notifications: form.notifications
      };
    }) */

    this.myForm.valueChanges.subscribe( ({conditions, ...rest}) => {
      this.person = rest;
    });
  }

  save() {
    const formValue = {...this.myForm.value};
    delete formValue.conditions;

    this.person = formValue;
  }

}
