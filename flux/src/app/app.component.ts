import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule],
})
export class AppComponent {
  isDark = false;

  toggleTheme() {
    const classUsed: string = document.documentElement.getAttribute('class') ?? '';
    document.documentElement.removeAttribute('class');
    console.log(classUsed);
    if (classUsed === 'dark-mode') {
      this.isDark = false;
      return document.documentElement.setAttribute('class', 'light-mode');
    }
    this.isDark = true;
    return document.documentElement.setAttribute('class', 'dark-mode');
  }
}
