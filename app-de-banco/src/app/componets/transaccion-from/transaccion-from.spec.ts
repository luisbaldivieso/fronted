import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionFrom } from './transaccion-from';

describe('TransaccionFrom', () => {
  let component: TransaccionFrom;
  let fixture: ComponentFixture<TransaccionFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
