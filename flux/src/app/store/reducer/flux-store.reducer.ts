import { Action, createReducer, on } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { fetchToggleConfigSuccess } from '../actions/flux-store.actions';

export const FLUX_STORE_KEY = 'flux';

export const initialFluxStore: FluxState = { initialLoad: false, applicationToggles: null };

const reducer = createReducer(
  initialFluxStore,
  on(
    fetchToggleConfigSuccess,
    (state, { applicationToggles }): FluxState => ({
      ...state,
      applicationToggles,
      initialLoad: true,
    }),
  ),
);

export const fluxReducer = (state: FluxState | undefined, action: Action) =>
  reducer(state || initialFluxStore, action);
