import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegistersService } from '../../services/registers/registers.service';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
form: FormGroup;

  constructor(private fb: FormBuilder, private registersService: RegistersService) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  onClickRegister(): void {
    if(this.form.invalid) return;
    this.registersService.createRegister(this.form.value, this.form.value)
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

}
