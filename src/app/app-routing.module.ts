import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanlarComponent } from './ilanlar/ilanlar.component';
import { IlanverComponent } from './ilanver/ilanver.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"ilanlar",component:IlanlarComponent},
  {path:"ilanver",component:IlanverComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
