import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxPrimengComponent } from './flux-primeng.component';

describe('FluxPrimengComponent', () => {
  let component: FluxPrimengComponent;
  let fixture: ComponentFixture<FluxPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxPrimengComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
