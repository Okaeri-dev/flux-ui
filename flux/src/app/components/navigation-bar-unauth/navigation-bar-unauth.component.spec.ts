import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarUnauthComponent } from './navigation-bar-unauth.component';
import { GlobalNavigationComponent } from 'flux-utilities';
import { MockComponent } from 'ng-mocks';

describe('NavigationBarUnauthComponent', () => {
  let component: NavigationBarUnauthComponent;
  let fixture: ComponentFixture<NavigationBarUnauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NavigationBarUnauthComponent] })
      .overrideComponent(NavigationBarUnauthComponent, {
        remove: { imports: [GlobalNavigationComponent] },
        add: { imports: [MockComponent(GlobalNavigationComponent)] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationBarUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
