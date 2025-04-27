import { createAction, props } from '@ngrx/store';
import { ApplicationToggles } from '../../feature-toggles/feature-toggles.state';

export const initialPageLoad = createAction('[flux - startup] - Initial page load');

export const fetchToggleConfig = createAction(
  '[flux Toggles] - Load Application Toggles',
  props<{ applicationVersion?: string }>(),
);

export const fetchToggleConfigSuccess = createAction(
  '[Flux Toggles] - Load toggless success',
  props<{ applicationToggles: ApplicationToggles }>(),
);

export const fetchToggleConfigFailure = createAction(
  '[Flux Toggles] - Load toggless failure',
  props<{ error: Error }>(),
);
