import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthformComponent } from './authform.component';
import { AuthrememberComponent } from './authremember.component';
import { AuthmessageComponent } from './authmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthformComponent,
    AuthrememberComponent,
    AuthmessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
