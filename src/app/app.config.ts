import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
// import { KeycloakService } from 'keycloak-angular';
// import { AuthGuard } from './core/auth/auth.guard';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // AuthGuard,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
    // KeycloakService,
  ],
};

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: environment.keycloakConfig.url,
//         realm: environment.keycloakConfig.realm,
//         clientId: environment.keycloakConfig.clientId,
//       },
//       initOptions: {
//         onLoad: 'check-sso',
//         checkLoginIframe: false,
//       },
//     });
// }
