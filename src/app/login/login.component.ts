import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

constructor(private _Authservice:AuthService , private _Router:Router){

  this.loginForm = new FormGroup({
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required , Validators.min(8)])
  })
  
}
  

}
