import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { AceuilComponent } from './aceuil/aceuil.component';
import { IndexComponent } from './aceuil/index/index.component';
import { NavComponent } from './aceuil/nav/nav.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "**" ,component:AppComponent},
  {path: "aceuil", component: AceuilComponent},
  {path: "index", component: IndexComponent},
  {path: "nav", component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
