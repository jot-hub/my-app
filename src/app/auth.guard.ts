import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {
    constructor(private router: Router, private oidcSecurityService: OidcSecurityService) {

      console.log("setting up AuthGuard");
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      console.log('AuthorizationGuard: canActivate');  
      return this.checkUser(route.routeConfig.path);
    }

    canLoad(state: Route): Observable<boolean> | boolean {
        return this.checkUser(state.path);
    }

    private checkUser(path): Observable<boolean> | boolean {
      
        if ('login' !== path) {
          
          console.log("checkUser: remember redirect to:", path);  
          this.write('redirect', path);
        }
          console.log('checkUser: real check');
          
          return this.oidcSecurityService.getIsAuthorized().pipe(tap((authorized: boolean) => {
            if (!authorized) {
                this.router.navigate(['/login']);
            } 
        }));
    }    

  

  private write(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}