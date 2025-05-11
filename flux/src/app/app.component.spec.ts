import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FluxStoreFacade } from './store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';
import { LandingDashboardComponent } from '@flux-components/landing-dashboard/landing-dashboard.component';
import { MockComponent } from 'ng-mocks';
import { Toast } from 'primeng/toast';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: FluxStoreFacade, useValue: { fetchToggleConfig: vi.fn() } },
        { provide: MessageService, useValue: { add: vi.fn() } },
      ],
    })
      .overrideComponent(AppComponent, {
        remove: { imports: [LandingDashboardComponent, Toast] },
        add: { imports: [MockComponent(LandingDashboardComponent), MockComponent(Toast)] },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
