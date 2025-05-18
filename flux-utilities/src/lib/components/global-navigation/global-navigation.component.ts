import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';

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
