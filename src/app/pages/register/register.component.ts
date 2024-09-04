import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegistersService } from '../../services/registers/registers.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzIconModule,
    RouterLink,
    NzSelectModule,
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

  onClickRegisterGoogle(): void {
    this.registersService.createRegisterWithGoogle()
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}
