import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerchantUserDetailComponent } from './emerchant-user-detail.component';

describe('EmerchantUserDetailComponent', () => {
  let component: EmerchantUserDetailComponent;
  let fixture: ComponentFixture<EmerchantUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerchantUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerchantUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
