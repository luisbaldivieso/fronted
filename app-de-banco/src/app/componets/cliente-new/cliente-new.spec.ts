import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNew } from './cliente-new';

describe('ClienteNew', () => {
  let component: ClienteNew;
  let fixture: ComponentFixture<ClienteNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
