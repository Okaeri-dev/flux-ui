import { Action, createReducer, on } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { fetchToggleConfigSuccess, initialPageLoad } from '../actions/flux-store.actions';

export const FLUX_STORE_KEY = 'flux';

export const initialFluxStore: FluxState = { initialLoad: false, applicationToggles: null };

const reducer = createReducer(
  initialFluxStore,
  on(initialPageLoad, (state): FluxState => ({ ...state, initialLoad: true })),
  on(
    fetchToggleConfigSuccess,
    (state, { applicationToggles }): FluxState => ({ ...state, applicationToggles }),
  ),
);

export const fluxReducer = (state: FluxState | undefined, action: Action) =>
  reducer(state || initialFluxStore, action);
