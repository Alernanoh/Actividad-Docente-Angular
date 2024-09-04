import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      passwrod: ["", Validators.required],
    });
  }
  onClickRegister(): void{
    this.usersService.register(this.form.value)
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  isLogged(): boolean {
    return this.usersService.getCurrentUser() != null;
  }

  onClickLogout():void{
    this.usersService.logout;
  }

  onClickLogin(): void{
    this.usersService.login(this.form.value)
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  onClickLoginGoogle(): void{
    this.usersService.loginWithGoogle()
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

}
