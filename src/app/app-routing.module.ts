import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

import { AppComponent } from './app.component';
import { AceuilComponent } from './container/aceuil/aceuil.component';
import { RegisterComponent } from './container/authentification/register/register.component';
import {ProfileComponent} from './container/users/profile/profile.component';
import {UsersComponent} from './container/users/users.component';
import {CommonModule} from '@angular/common';
import {DashbordComponent} from './container/aceuil/index/dashbord/dashbord.component';
import {IndexComponent} from './container/aceuil/index/index.component';
import {AuthentificationComponent} from './container/authentification/authentification.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
    children: [
      {path: '', component: DashbordComponent},
      {path: 'dashbord', component: DashbordComponent},
      {path: 'users/:id', component: ProfileComponent},
      {path: 'users', component: UsersComponent},
             ]
  } ,
  { path: '' ,
    component: AuthentificationComponent,
  children: [
    {path: 'register' , component: RegisterComponent}
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
