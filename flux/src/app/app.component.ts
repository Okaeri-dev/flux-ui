import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, inject, signal } from '@angular/core';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { MetricCardComponent } from './cards/metric-card/metric-card.component';

interface StatCard {
  icon: string;
  iconColor: string;
  value: string;
  label: string;
  percentage: number | null;
  isPositive: boolean;
  backgroundColor: string;
}
@Component({
  selector: 'app-root',
  imports: [Toast, CommonModule, MetricCardComponent],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'flux';
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);
  public readonly messageService: MessageService = inject(MessageService);

  ngAfterViewInit(): void {
    this.fluxStoreFacade.fetchToggleConfig('test');
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'The page has been loaded',
      life: 3000,
    });
  }

  // Using signals to store card data
  salesCard = signal<StatCard>({
    icon: 'pi pi-shopping-bag',
    iconColor: '#E91E63',
    value: '$24,780',
    label: 'Total Sales',
    percentage: 12.5,
    isPositive: true,
    backgroundColor: '#F9F9F9',
  });

  customersCard = signal<StatCard>({
    icon: 'pi pi-users',
    iconColor: '#3F51B5',
    value: '1,482',
    label: 'New Customers',
    percentage: 8.2,
    isPositive: true,
    backgroundColor: '#F9F9F9',
  });

  orderCard = signal<StatCard>({
    icon: 'pi pi-chart-line',
    iconColor: '#FF9800',
    value: '$8,549',
    label: 'Average Order',
    percentage: 3.1,
    isPositive: false,
    backgroundColor: '#F9F9F9',
  });

  // Signal to control reset button visibility
  showResetButton = computed(() => {
    return this.salesCard().value !== '$24,780' || this.salesCard().percentage !== 12.5;
  });

  // Method to demonstrate updating signal values
  updateSalesData() {
    // Using update method to modify the signal value
    this.salesCard.update(current => ({ ...current, value: '$26,450', percentage: 15.2 }));
  }

  // Method to reset sales data to original values
  resetSalesData() {
    this.salesCard.set({
      icon: 'pi pi-shopping-bag',
      iconColor: '#E91E63',
      value: '$24,780',
      label: 'Total Sales',
      percentage: 12.5,
      isPositive: true,
      backgroundColor: '#F9F9F9',
    });
  }
}
