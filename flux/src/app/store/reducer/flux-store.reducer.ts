import { Action, createReducer, on } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import {
  fetchToggleConfigSuccess,
  setCurrentUrl,
  pageLevelLoader,
} from '../actions/flux-store.actions';

export const FLUX_STORE_KEY = 'flux';

export const initialFluxStore: FluxState = {
  initialLoad: false,
  isAuth: false,
  applicationToggles: null,
  loading: false,
  currentUrl: '/',
};

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
  on(setCurrentUrl, (state, { currentUrl }): FluxState => ({ ...state, currentUrl })),
  on(pageLevelLoader, (state, { loading }): FluxState => ({ ...state, loading })),
);

export const fluxReducer = (state: FluxState | undefined, action: Action) =>
  reducer(state || initialFluxStore, action);
