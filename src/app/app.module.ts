import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { IndexComponent } from './aceuil/index/index.component';
import { NavComponent } from './aceuil/nav/nav.component';
import { SlideComponent } from './aceuil/slide/slide.component';
import { FooterComponent } from './aceuil/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { EvenementComponent } from './evenement/evenement.component';
import { RegisterComponent } from './users/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
