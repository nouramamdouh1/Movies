import { Component } from '@angular/core';
import { FormGroup , FormControl ,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
 
registerForm:FormGroup;
flag:boolean = false;

  constructor(private _AuthService:AuthService , private _Router:Router){

    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required , Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.min(8)]),
    });
  }
  ngOnInit():void {} 
  getregisterinfo(registerForm:any){
    if (registerForm.valid == true) {
         this._AuthService.register(registerForm.value).subscribe((data)=>{
            if (data.message=='success') {
              return this._Router.navigate(['/login']);
              
              
            }else{
              return this.flag=true; 
              // console.log("failed");
            }
         })
        }
   }

}
