import { ApplicationToggles } from '@flux-models/feature-toggles/feature-toggles.models';

export interface FluxState {
  initialLoad: boolean;
  applicationToggles: ApplicationToggles | null;
}
