import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {OidcSecurityService, AuthorizationState} from 'angular-auth-oidc-client';
import {AuthorizationResult} from 'angular-auth-oidc-client';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public oidcSecurityService: OidcSecurityService) {
    console.log('LoginComponent: constructor');
    console.log("LoginComponent: oidcSecurityService.isModuleSetup:", this.oidcSecurityService.moduleSetup);
  }

  ngOnInit() {
    
    console.log('LoginComponent: triggering actual authz');
    this.oidcSecurityService.getIsModuleSetup().subscribe(() => {
      this.oidcSecurityService.authorize();
    });    
  }

}
