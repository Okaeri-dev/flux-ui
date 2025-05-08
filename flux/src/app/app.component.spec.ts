import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FluxStoreFacade } from './store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: FluxStoreFacade, useValue: { fetchToggleConfig: vi.fn() } },
        { provde: MessageService, useValue: { add: vi.fn() } },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
