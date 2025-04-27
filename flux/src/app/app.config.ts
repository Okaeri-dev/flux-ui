import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { rootReducer } from './store/reducer/flux-root-store.reducers';
import { provideEffects } from '@ngrx/effects';
import { FluxEffects } from './store/effects/flux-store.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(rootReducer),
    provideEffects([FluxEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
  ],
};
