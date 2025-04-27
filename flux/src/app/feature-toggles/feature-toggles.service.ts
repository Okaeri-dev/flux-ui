import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import featureToggles from './feature-toggles.json';
import { ApplicationToggles } from './feature-toggles.state';
import { ApiResponse } from '../store/models/flux-api.models';

@Injectable({ providedIn: 'root' })
export class FeatureTogglesService {
  getFeatureToggles$(applicationVersion?: string): Observable<ApiResponse<ApplicationToggles>> {
    if (applicationVersion) {
      return of({ data: featureToggles });
    } else {
      return of({ error: new Error('Failed to fetch toggles') });
    }
  }
}
