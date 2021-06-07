import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAverageComponent } from './ticket-average.component';

describe('TicketAverageComponent', () => {
  let component: TicketAverageComponent;
  let fixture: ComponentFixture<TicketAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
