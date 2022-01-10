import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmerchantComponent } from './create-emerchant.component';

describe('CreateEmerchantComponent', () => {
  let component: CreateEmerchantComponent;
  let fixture: ComponentFixture<CreateEmerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
