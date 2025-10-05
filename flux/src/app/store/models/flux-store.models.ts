import { ApplicationToggles } from '@flux-models/feature-toggles/feature-toggles.models';

export interface FluxState {
  initialLoad: boolean;
  isAuth: boolean;
  applicationToggles: ApplicationToggles | null;
  loading: boolean;
  currentUrl: string;
}
