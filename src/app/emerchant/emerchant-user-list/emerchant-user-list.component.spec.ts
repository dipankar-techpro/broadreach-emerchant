import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerchantUserListComponent } from './emerchant-user-list.component';

describe('EmerchantUserListComponent', () => {
  let component: EmerchantUserListComponent;
  let fixture: ComponentFixture<EmerchantUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerchantUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerchantUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
