import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceModule } from './workspace/workspace.module';

import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WorkspaceModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
=======
    HttpClientModule
>>>>>>> origin/main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
