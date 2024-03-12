import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerRoutes } from './auth/auth.routes';
import {provideStore} from "@ngrx/store";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(registerRoutes), provideStore()]
};
