import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipelistComponent } from './swipelist.component';

describe('SwipelistComponent', () => {
  let component: SwipelistComponent;
  let fixture: ComponentFixture<SwipelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
