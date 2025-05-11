import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { Observable } from 'rxjs';
import { fetchToggleConfig, pageLevelLoader } from '../actions/flux-store.actions';
import { getApplicationToggles, getLoading } from '../selectors/flux-store.selectors';
import { ApplicationToggles } from '@flux-models/feature-toggles/feature-toggles.models';

@Injectable({ providedIn: 'root' })
export class FluxStoreFacade {
  private readonly store$: Store<FluxState> = inject(Store<FluxState>);

  getApplicationToggles$: Observable<ApplicationToggles | null> =
    this.store$.select(getApplicationToggles);

  getLoading$: Observable<boolean> = this.store$.select(getLoading);

  fetchToggleConfig(applicationVersion?: string) {
    this.store$.dispatch(fetchToggleConfig({ applicationVersion }));
  }

  setPageLevelLoader(loading: boolean) {
    this.store$.dispatch(pageLevelLoader({ loading }));
  }
}
