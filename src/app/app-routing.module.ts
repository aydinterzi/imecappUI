import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanlarComponent } from './ilanlar/ilanlar.component';
import { IlanverComponent } from './ilanver/ilanver.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth_guard';

const routes: Routes = [
  {path:"",redirectTo:"/ilanlar",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"ilanlar",component:IlanlarComponent,canActivate:[AuthGuard]},
  {path:"ilanver",component:IlanverComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
