import { ApplicationToggles } from '@flux-models/feature-toggles/feature-toggles.models';
import { createAction, props } from '@ngrx/store';

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

export const pageLevelLoader = createAction(
  '[loader] - Set page level loader',
  props<{ loading: boolean }>(),
);

export const setCurrentUrl = createAction(
  '[Navigation] - Set current url',
  props<{ currentUrl: string }>(),
);
