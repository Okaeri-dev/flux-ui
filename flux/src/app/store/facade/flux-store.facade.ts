import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FluxState } from '../models/flux-store.models';
import { Observable } from 'rxjs';
import { ApplicationToggles } from '../../feature-toggles/feature-toggles.state';
import { fetchToggleConfig } from '../actions/flux-store.actions';
import { getApplicationToggles } from '../selectors/flux-store.selectors';

@Injectable({ providedIn: 'root' })
export class FluxStoreFacade {
  private readonly store$: Store<FluxState> = inject(Store<FluxState>);

  getApplicationToggles$: Observable<ApplicationToggles | null> =
    this.store$.select(getApplicationToggles);

  fetchToggleConfig(applicationVersion?: string) {
    this.store$.dispatch(fetchToggleConfig({ applicationVersion }));
  }
}
