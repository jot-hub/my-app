import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationGuard } from './auth.guard';
import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";

const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'logs', component: LogsComponent, canActivate: [AuthorizationGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'auth-callback', component: AuthCallbackComponent },
    { path: '**', component: PageNotFoundComponent }
    ];
@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        {
          enableTracing: false,
          useHash: false
        }
      )
    ],
    providers: [ AuthorizationGuard  ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}