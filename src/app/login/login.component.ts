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

  loginForm!: FormGroup;
  flag:boolean=false;
  errormessage!:string;

  constructor(private _AuthService:AuthService , private _Router:Router){

  }
  ngOnInit():void {
    
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required , Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.min(8)]),
    });
  } 
  getlogininfo(loginForm:any){
    if (loginForm.valid == true) {
         this._AuthService.login(loginForm.value).subscribe((data)=>{
            if (data.message=='success') {
              return this._Router.navigate(['/home']);              
              
            }else{
              this.flag=true;
             return this.errormessage=data.message;
             
            }
         })
        }
   }



  

}








