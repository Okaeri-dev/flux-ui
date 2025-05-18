import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarUnauthComponent } from './navigation-bar-unauth.component';

describe('NavigationBarUnauthComponent', () => {
  let component: NavigationBarUnauthComponent;
  let fixture: ComponentFixture<NavigationBarUnauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBarUnauthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBarUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
