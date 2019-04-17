import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AceuilComponent } from './container/aceuil/aceuil.component';
import { IndexComponent } from './container/aceuil/index/index.component';
import { NavComponent } from './container/aceuil/nav/nav.component';
import { SlideComponent } from './container/aceuil/slide/slide.component';
import { FooterComponent } from './container/aceuil/footer/footer.component';
import { UsersComponent } from './container/users/users.component';
import { EvenementComponent } from './container/aceuil/index/evenement/evenement.component';
import { RegisterComponent } from './container/authentification/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './container/users/profile/profile.component';
import { DashbordComponent } from './container/aceuil/index/dashbord/dashbord.component';
import { AuthentificationComponent } from './container/authentification/authentification.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    AceuilComponent,
    IndexComponent,
    NavComponent,
    SlideComponent,
    FooterComponent,
    UsersComponent,
    EvenementComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent,
    AuthentificationComponent,
    ContainerComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
