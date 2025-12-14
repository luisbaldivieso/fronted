import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoCard } from './saldo-card';

describe('SaldoCard', () => {
  let component: SaldoCard;
  let fixture: ComponentFixture<SaldoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
