import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { FLUX_STORE_KEY } from '../reducer/flux-store.reducer';
import { ApplicationToggles } from '../../feature-toggles/feature-toggles.state';

export const getFluxState: MemoizedSelector<FluxState, FluxState> =
  createFeatureSelector(FLUX_STORE_KEY);

export const getApplicationToggles: MemoizedSelector<FluxState, ApplicationToggles | null> =
  createSelector(getFluxState, (state: FluxState) => state.applicationToggles);
