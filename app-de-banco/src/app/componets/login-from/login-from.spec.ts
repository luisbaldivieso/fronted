import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFrom } from './login-from';

describe('LoginFrom', () => {
  let component: LoginFrom;
  let fixture: ComponentFixture<LoginFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
