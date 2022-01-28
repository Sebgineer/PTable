import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PElementDisplayComponent } from './pelement-display.component';

describe('PElementDisplayComponent', () => {
  let component: PElementDisplayComponent;
  let fixture: ComponentFixture<PElementDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PElementDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PElementDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
