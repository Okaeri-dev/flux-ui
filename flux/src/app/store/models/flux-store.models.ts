import { ApplicationToggles } from '@flux-models/feature-toggles/feature-togles.models';

export interface FluxState {
  initialLoad: boolean;
  applicationToggles: ApplicationToggles | null;
}
