import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { fetchToggleConfig, pageLevelLoader, setCurrentUrl } from '../actions/flux-store.actions';
import {
  getApplicationToggles,
  getCurrentUrl,
  getLoading,
} from '../selectors/flux-store.selectors';

@Injectable({ providedIn: 'root' })
export class FluxStoreFacade {
  private readonly store$: Store<FluxState> = inject(Store<FluxState>);

  getApplicationToggles$ = this.store$.select(getApplicationToggles);
  getLoading$ = this.store$.select(getLoading);
  getCurrentUrl$ = this.store$.select(getCurrentUrl);

  fetchToggleConfig(applicationVersion?: string) {
    this.store$.dispatch(fetchToggleConfig({ applicationVersion }));
  }

  setPageLevelLoader(loading: boolean) {
    this.store$.dispatch(pageLevelLoader({ loading }));
  }

  setCurrentUrl(currentUrl: string) {
    this.store$.dispatch(setCurrentUrl({ currentUrl }));
  }
}
