import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchToggleConfig,
  fetchToggleConfigFailure,
  fetchToggleConfigSuccess,
} from '../actions/flux-store.actions';
import { map, switchMap } from 'rxjs';
import { FeatureTogglesService } from '../../feature-toggles/feature-toggles.service';

@Injectable()
export class FluxEffects {
  actions$: Actions = inject(Actions);
  featureTogglesService: FeatureTogglesService = inject(FeatureTogglesService);

  fetchApplciationToggles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchToggleConfig),
      switchMap(action => this.featureTogglesService.getFeatureToggles$(action.applicationVersion)),
      map(res => {
        if (res.data && res.status === 'SUCCESS') {
          return fetchToggleConfigSuccess({ applicationToggles: res.data });
        } else {
          return fetchToggleConfigFailure({ error: res.error ?? new Error() });
        }
      }),
    ),
  );
}
