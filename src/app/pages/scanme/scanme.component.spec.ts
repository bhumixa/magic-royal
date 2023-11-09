import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanmeComponent } from './scanme.component';

describe('ScanmeComponent', () => {
  let component: ScanmeComponent;
  let fixture: ComponentFixture<ScanmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
