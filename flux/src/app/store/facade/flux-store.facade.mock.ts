import { of } from 'rxjs';
import { FluxStoreFacade } from './flux-store.facade';

export const fluxStoreFacadeMock: Partial<FluxStoreFacade> = {
  fetchToggleConfig: vi.fn(),
  setPageLevelLoader: vi.fn(),
  getLoading$: of(),
  getApplicationToggles$: of(),
};
