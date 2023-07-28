import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islogin: boolean = false;

  constructor(private _AuthService: AuthService) { 
    this._AuthService.currentusers.subscribe((data)=>{
      if(data!=null){
        this.islogin = true;

    }else{
      this.islogin = false;

    }
   } );
}
}
