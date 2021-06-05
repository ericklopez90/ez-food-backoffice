import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderComponent } from './detail-order.component';

describe('DetailOrderComponent', () => {
  let component: DetailOrderComponent;
  let fixture: ComponentFixture<DetailOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
