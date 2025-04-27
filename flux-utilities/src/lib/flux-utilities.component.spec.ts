import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxUtilitiesComponent } from './flux-utilities.component';

describe('FluxUtilitiesComponent', () => {
  let component: FluxUtilitiesComponent;
  let fixture: ComponentFixture<FluxUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FluxUtilitiesComponent] }).compileComponents();

    fixture = TestBed.createComponent(FluxUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
