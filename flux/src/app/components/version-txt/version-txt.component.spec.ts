import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionTxtComponent } from './version-txt.component';

describe('VersionTxtComponent', () => {
  let component: VersionTxtComponent;
  let fixture: ComponentFixture<VersionTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VersionTxtComponent] }).compileComponents();

    fixture = TestBed.createComponent(VersionTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
