import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDetailViewComponent } from './csv-detail-view.component';

describe('CsvDetailViewComponent', () => {
  let component: CsvDetailViewComponent;
  let fixture: ComponentFixture<CsvDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
