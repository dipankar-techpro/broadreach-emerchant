import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmerchantUserComponent } from './create-emerchant-user.component';

describe('CreateEmerchantUserComponent', () => {
  let component: CreateEmerchantUserComponent;
  let fixture: ComponentFixture<CreateEmerchantUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmerchantUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmerchantUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
