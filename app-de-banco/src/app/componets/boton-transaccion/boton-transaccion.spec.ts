import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTransaccion } from './boton-transaccion';

describe('BotonTransaccion', () => {
  let component: BotonTransaccion;
  let fixture: ComponentFixture<BotonTransaccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonTransaccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTransaccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
