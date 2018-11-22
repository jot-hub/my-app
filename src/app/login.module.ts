import { HttpClientModule } from '@angular/common/http';
import {
  AuthModule,
  OidcSecurityService,
  OpenIDImplicitFlowConfiguration,
  OidcConfigService,
  AuthWellKnownEndpoints
} from 'angular-auth-oidc-client';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    AuthModule.forRoot()
  ],
  providers: [
    OidcSecurityService,
    OidcConfigService
  ],
  bootstrap: []
})
export class LoginModule {

  constructor(
      private oidcSecurityService: OidcSecurityService,
      private oidcConfigService: OidcConfigService
  ) {
    console.log('LoginModule: constructor');

    console.log(oidcConfigService);
    console.log(oidcSecurityService);

    this.oidcConfigService.load_using_stsServer('https://accounts.google.com');
    //this.oidcConfigService.load_using_stsServer('https://api.login.yahoo.com');

    this.oidcConfigService.onConfigurationLoaded.subscribe(() => {

      console.log('LoginModule: Configuration loaded');

      let openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
      openIDImplicitFlowConfiguration.stsServer = 'https://accounts.google.com';      
      //openIDImplicitFlowConfiguration.stsServer = 'https://api.login.yahoo.com';
      openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:8080/auth-callback';
      //openIDImplicitFlowConfiguration.redirect_url = 'http://jothi.ahoo.com:8080/auth-callback';
      openIDImplicitFlowConfiguration.client_id = '143513081999-fg4liad58qlqle84kd1ogs6o3nuieuh6.apps.googleusercontent.com';
      //openIDImplicitFlowConfiguration.client_id = 'dj0yJmk9YThhME11cmo3UVRtJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEz';
      openIDImplicitFlowConfiguration.response_type = 'id_token token';
      //openIDImplicitFlowConfiguration.response_type = 'id_token';
      openIDImplicitFlowConfiguration.scope = 'openid email profile';
      //openIDImplicitFlowConfiguration.scope = 'openid email';
      openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:8080/unauthorized';
      openIDImplicitFlowConfiguration.post_login_route = '/loggedin';
      openIDImplicitFlowConfiguration.forbidden_route = '/forbidden';
      openIDImplicitFlowConfiguration.unauthorized_route = '/unauthorized';
      openIDImplicitFlowConfiguration.trigger_authorization_result_event = true;
      openIDImplicitFlowConfiguration.log_console_warning_active = true;
      openIDImplicitFlowConfiguration.log_console_debug_active = true;
      openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 20;

      const authWellKnownEndpoints = new AuthWellKnownEndpoints();
      authWellKnownEndpoints.setWellKnownEndpoints(this.oidcConfigService.wellKnownEndpoints);

      this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);

      console.log("LoginModule: oidcSecurityService.isModuleSetup:", this.oidcSecurityService.moduleSetup);

    });

    console.log('LoginModule: Ready');
  }
}