import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DemoMaterialModule } from '../material-module';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';

import { LoginComponent } from './login/login.component';
import {LoginModule} from './login.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, LogsComponent, LoginComponent, PageNotFoundComponent, AuthCallbackComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LoginModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
