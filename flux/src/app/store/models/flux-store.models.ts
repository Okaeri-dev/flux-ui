import { ApplicationToggles } from '../../feature-toggles/feature-toggles.state';

export interface FluxState {
  initialLoad: boolean;
  applicationToggles: ApplicationToggles | null;
}
