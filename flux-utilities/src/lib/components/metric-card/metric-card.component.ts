import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { MetricCard } from '../../models';

@Component({
  selector: 'flux-utilities-metric-card',
  imports: [CommonModule, CardModule, TagModule],
  standalone: true,
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
})
export class MetricCardComponent {
  @Input({ required: true }) metricCard: MetricCard | undefined;
  @Output() readonly metricCardClicked: EventEmitter<MetricCard> = new EventEmitter<MetricCard>()
}
