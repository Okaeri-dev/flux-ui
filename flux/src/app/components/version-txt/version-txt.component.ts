import { Component } from '@angular/core';
import packageJson from '../../../../../package.json';
import { environment } from 'environments/environment';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'flux-version-txt',
  imports: [JsonPipe],
  standalone: true,
  templateUrl: './version-txt.component.html',
  styles: [
    `
      .version--config {
        padding: 1.5rem;
        font-size: 0.75rem;
      }
    `,
  ],
})
export class VersionTxtComponent {
  configuration = {
    release: packageJson.version,
    environment: environment.ENV,
    branch: environment.GIT_BRANCH,
    commitHash: environment.GIT_COMMIT,
  };
}
