import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDayComponent } from './sales-day.component';

describe('SalesDayComponent', () => {
  let component: SalesDayComponent;
  let fixture: ComponentFixture<SalesDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
