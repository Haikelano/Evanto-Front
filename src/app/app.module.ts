import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { IndexComponent } from './aceuil/index/index.component';
import { NavComponent } from './aceuil/nav/nav.component';
import { SlidebarComponent } from './aceuil/slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AceuilComponent,
    IndexComponent,
    NavComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
