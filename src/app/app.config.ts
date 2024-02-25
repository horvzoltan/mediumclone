import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerRoutes } from './auth/auth.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(registerRoutes)]
};
