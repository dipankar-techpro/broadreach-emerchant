import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerchantListComponent } from './emerchant-list.component';

describe('EmerchantListComponent', () => {
  let component: EmerchantListComponent;
  let fixture: ComponentFixture<EmerchantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerchantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
