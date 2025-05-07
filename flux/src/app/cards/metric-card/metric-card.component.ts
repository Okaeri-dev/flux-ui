import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule, CardModule, TagModule],
  standalone: true,
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
})
export class MetricCardComponent {
  icon = input('pi pi-shopping-bag');
  iconColor = input('#E91E63');
  value = input('$0');
  label = input('Label');
  percentage = input<number | null>(null);
  percentageLabel = input('');
  isPositive = input(true);
  backgroundColor = input('#FFFFFF');

  // Computed signal for percentage display
  formattedPercentage = computed(() => {
    if (this.percentage() === null) return null;
    return `${this.isPositive() ? '+' : ''}${this.percentage()}%`;
  });
}
