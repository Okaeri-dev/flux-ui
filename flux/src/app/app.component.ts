import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { LandingDashboardComponent } from '@flux-components/landing-dashboard/landing-dashboard.component';
import { NavigationBarComponent } from '@flux-components/navigation-bar/navigation-bar.component';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Toast } from 'primeng/toast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    Toast,
    CommonModule,
    LandingDashboardComponent,
    Button,
    ProgressSpinner,
    NavigationBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);
  public readonly messageService: MessageService = inject(MessageService);

  loading$: Observable<boolean> = this.fluxStoreFacade.getLoading$;

  ngAfterViewInit(): void {
    this.fluxStoreFacade.fetchToggleConfig('test');
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
}
