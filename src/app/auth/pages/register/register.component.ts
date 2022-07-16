import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, namePattern, noPuedeSerStrider } from 'src/app/shared/validators/validators';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emialValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.similarFormFields('password', 'password2')]
  });

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emialValidator: EmailValidatorService) { }

  ngOnInit() {
    this.myForm.reset(
      {
        name: 'Luis Burgos',
        email: 'test1@test.com',
        username: 'luisbr'
      }
    )
  }

  validFormField(field: string) {
    return this.myForm.get(field)?.invalid
      && this.myForm.get(field)?.touched;
  }

  
  submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }

  get emailErorrMsg(): string {

    const errors = this.myForm.get('email').errors;

    if(errors?.required) {
      return 'Este campo es obligatorio';
    } else if( errors?.pattern) {
      return 'El formato del correo no es valido';
    } else if(errors?.emailTaken) {
      return 'Este correo ya existe';
    }

    return '';
  }

  /* emailRequired() {
    return this.myForm.get('email')?.errors?.required
      && this.myForm.get('email')?.touched;
  }
  
  emailPattern() {
    return this.myForm.get('email')?.errors?.pattern
      && this.myForm.get('email')?.touched;
  }
  
  emailTaken() {
    return this.myForm.get('email')?.errors?.emailTaken
      && this.myForm.get('email')?.touched;
  } */
}
