import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'flux-navigation-bar',
  imports: [Menubar, CommonModule, Button],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  public items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Features', icon: 'pi pi-star' },
    { label: 'Contact', icon: 'pi pi-envelope' },
  ];
}
