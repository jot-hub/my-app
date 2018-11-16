import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DemoMaterialModule } from '../material-module';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'logs', component: LogsComponent }
    ];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, LogsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
