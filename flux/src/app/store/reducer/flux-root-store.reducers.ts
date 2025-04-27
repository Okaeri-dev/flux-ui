import { ActionReducerMap } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { fluxReducer } from './flux-store.reducer';

export const rootReducer: ActionReducerMap<RootStore> = { flux: fluxReducer };

export const ROOT_STORE = 'root';

export interface RootStore {
  flux: FluxState;
}
