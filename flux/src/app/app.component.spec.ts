import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FluxStoreFacade } from './store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';
import { LandingDashboardComponent } from '@flux-components/landing-dashboard/landing-dashboard.component';
import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: FluxStoreFacade, useValue: { fetchToggleConfig: vi.fn() } },
        { provide: MessageService, useValue: { add: vi.fn() } },
      ],
    })
      .overrideComponent(AppComponent, {
        remove: { imports: [LandingDashboardComponent] },
        add: { imports: [MockComponent(LandingDashboardComponent)] },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
