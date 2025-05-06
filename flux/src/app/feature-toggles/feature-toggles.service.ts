import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import featureToggles from './feature-toggles.json';
import { ApiResponse } from '../store/models/flux-api.models';
import { ApplicationToggles } from '@flux-models/feature-toggles/feature-toggles.models';

@Injectable({ providedIn: 'root' })
export class FeatureTogglesService {
  getFeatureToggles$(applicationVersion?: string): Observable<ApiResponse<ApplicationToggles>> {
    if (applicationVersion) {
      return of({ status: 'SUCCESS', data: featureToggles });
    } else {
      return of({ status: 'ERROR', error: new Error('Failed to fetch toggles') });
    }
  }
}
