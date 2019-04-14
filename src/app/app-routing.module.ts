import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

import { AppComponent } from './app.component';
import { AceuilComponent } from './container/aceuil/aceuil.component';
import { RegisterComponent } from './container/aceuil/index/users/register/register.component';
import {ProfileComponent} from './container/aceuil/index/users/profile/profile.component';
import {UsersComponent} from './container/aceuil/index/users/users.component';
import {CommonModule} from '@angular/common';
import {DashbordComponent} from './container/aceuil/index/dashbord/dashbord.component';

const routes: Routes = [
  {path: 'acceuil', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'users', component: UsersComponent},
  {path: 'dashbord', component: DashbordComponent},
  {path: '' , component: AppComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
