import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MetricCard } from '../../models';
import { CardModule, TagModule } from 'flux-primeng-components';

@Component({
  selector: 'flux-utilities-metric-card',
  imports: [CommonModule, CardModule, TagModule],
  standalone: true,
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
})
export class MetricCardComponent {
  @Input({ required: true }) metricCard: MetricCard | undefined;
  @Output() readonly metricCardClicked: EventEmitter<MetricCard> = new EventEmitter<MetricCard>();
}
