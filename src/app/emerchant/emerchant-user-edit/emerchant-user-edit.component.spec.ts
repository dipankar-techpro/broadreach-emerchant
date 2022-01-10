import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerchantUserEditComponent } from './emerchant-user-edit.component';

describe('EmerchantUserEditComponent', () => {
  let component: EmerchantUserEditComponent;
  let fixture: ComponentFixture<EmerchantUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerchantUserEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerchantUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
