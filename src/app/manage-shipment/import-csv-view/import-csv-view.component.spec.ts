import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCsvViewComponent } from './import-csv-view.component';

describe('ImportCsvViewComponent', () => {
  let component: ImportCsvViewComponent;
  let fixture: ComponentFixture<ImportCsvViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCsvViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCsvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
