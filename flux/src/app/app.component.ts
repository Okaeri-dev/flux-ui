import { AfterViewInit, Component, inject } from '@angular/core';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { FluxUtilitiesService } from 'flux-utilities';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [Toast],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'flux';
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);
  public readonly messageService: MessageService = inject(MessageService);
  public readonly fluxUtilitiesService: FluxUtilitiesService = inject(FluxUtilitiesService);

  ngAfterViewInit(): void {
    this.fluxStoreFacade.fetchToggleConfig('test');
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'The page has been loaded',
      life: 3000,
    });
  }
}
