import { Component } from '@angular/core';
import { GlobalNavigationComponent } from 'flux-utilities';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'flux-navigation-bar-unauth',
  imports: [GlobalNavigationComponent],
  templateUrl: './navigation-bar-unauth.component.html',
  styleUrl: './navigation-bar-unauth.component.scss',
  standalone: true,
})
export class NavigationBarUnauthComponent {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Features', icon: 'pi pi-star' },
    { label: 'Contact', icon: 'pi pi-envelope' },
  ];
  icon: string = 'assets/primeng.svg';
}
