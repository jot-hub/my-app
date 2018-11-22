import { Component, OnInit } from '@angular/core';
import { OidcSecurityService, AuthorizationResult, AuthorizationState } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router: Router, private oidcSecurityService: OidcSecurityService) {     

    this.oidcSecurityService.onAuthorizationResult.subscribe(
      (authorizationResult: AuthorizationResult) => {
          this.onAuthorizationResultComplete(authorizationResult);
      });
  }

  ngOnInit() {    

    console.log("auth-callback");
      
    if(window.location.hash) {
      console.log("hash:", window.location.hash);
      window.location.hash = decodeURIComponent(window.location.hash);
      console.log("hash:", window.location.hash);
      this.oidcSecurityService.authorizedCallback();
    } 
  }

  private onAuthorizationResultComplete(authorizationResult: AuthorizationResult) {

    const path = this.read('redirect');
    console.log("should redirect to:", path);
    console.log('Auth result received AuthorizationState:'
        + authorizationResult.authorizationState
        + ' validationResult:' + authorizationResult.validationResult);

    if (authorizationResult.authorizationState === AuthorizationState.authorized) {
        this.router.navigate([path]);
    } else {
        this.router.navigate(['/Unauthorized']);
    }
  }

  private read(key: string): any {
    const data = localStorage.getItem(key);
    if (data != null) {
        return JSON.parse(data);
    }

    return;
  }

}
