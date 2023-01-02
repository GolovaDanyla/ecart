import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercardComponent } from './mastercard.component';

describe('MastercardComponent', () => {
  let component: MastercardComponent;
  let fixture: ComponentFixture<MastercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
