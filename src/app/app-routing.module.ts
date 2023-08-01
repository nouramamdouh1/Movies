import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tvshows',canActivate:[AuthGuard],component:TvshowsComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvdetailsComponent},
  {path:'**',component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
