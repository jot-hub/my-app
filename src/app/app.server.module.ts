import { NgModule, OnDestroy } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule, provideRoutes, Router } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const srvRoutes: Routes = [ { path: 'app-shell-path', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
  ],
  providers: [provideRoutes(srvRoutes)],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule implements OnDestroy {

  private appRoutes: Routes;

  constructor(private router: Router) {
    this.appRoutes = this.router.config;
    if(this.appRoutes !== srvRoutes) {
      this.router.resetConfig(srvRoutes);
    }
  }

  ngOnDestroy() {
    if(this.appRoutes !== srvRoutes) {
      this.router.resetConfig(this.appRoutes);
    }
  }
}