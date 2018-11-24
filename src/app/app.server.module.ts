import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [ { path: 'app-shell-path', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
  ],
  providers: [provideRoutes(routes)],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}