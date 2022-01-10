import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerchantDetailComponent } from './emerchant-detail.component';

describe('EmerchantDetailComponent', () => {
  let component: EmerchantDetailComponent;
  let fixture: ComponentFixture<EmerchantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerchantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerchantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
