import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';


export const authGuard: CanActivateFn = (route, state) => {


  return true;
};












