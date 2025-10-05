import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { FluxEffects } from './store/effects/flux-store.effects';
import { rootReducer } from './store/reducer/flux-root-store.reducers';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import CatppuccinFrappePreset from './themes/catppuccin-frappe';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(rootReducer),
    provideEffects([FluxEffects]),
    ...(isDevMode() ? [provideStoreDevtools({ maxAge: 25 })] : []),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: CatppuccinFrappePreset, options: { darkModeSelector: '.dark' } },
    }),
    provideHttpClient(withFetch()),
    MessageService,
    provideClientHydration(withEventReplay()),
  ],
};
