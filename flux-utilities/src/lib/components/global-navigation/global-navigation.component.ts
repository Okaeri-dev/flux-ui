import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button, Menubar } from 'flux-primeng-components';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'flux-utilities-global-navigation',
  imports: [CommonModule, Menubar, Button],
  templateUrl: './global-navigation.component.html',
  styleUrl: './global-navigation.component.scss',
  standalone: true,
})
export class GlobalNavigationComponent {
  @Input({ required: true }) navigationItems: MenuItem[] = [];
  @Input({ required: true }) icon: string | undefined;
}
