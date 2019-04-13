import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

import { AppComponent } from './app.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path: 'Acceuil', component: AceuilComponent},
  {path: 'register', component: RegisterComponent},
  {path: '' , component: AceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
