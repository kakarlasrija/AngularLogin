import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

const routes: Routes = [
  {path: "" , component : RegisterLoginComponent},
  {path: "home" , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }