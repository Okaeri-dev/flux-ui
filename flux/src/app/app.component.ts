import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { LandingDashboardComponent } from '@flux-components/landing-dashboard/landing-dashboard.component';
import { NavigationBarUnauthComponent } from '@flux-components/navigation-bar-unauth/navigation-bar-unauth.component';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Toast } from 'primeng/toast';
import { ProgressSpinner } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { PushPipe } from '@ngrx/component';

@Component({
  selector: 'app-root',
  imports: [
    Toast,
    CommonModule,
    LandingDashboardComponent,
    ProgressSpinner,
    NavigationBarUnauthComponent,
    RouterModule,
    PushPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);
  public readonly messageService: MessageService = inject(MessageService);
  public readonly location: Location = inject(Location);

  loading$: Observable<boolean> = this.fluxStoreFacade.getLoading$;
  currentUrl$: Observable<string> = this.fluxStoreFacade.getCurrentUrl$;

  ngAfterViewInit(): void {
    this.location.onUrlChange(url => {
      this.fluxStoreFacade.setCurrentUrl(url);
    });
    this.fluxStoreFacade.fetchToggleConfig('test');
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
}
