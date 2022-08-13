import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleChartsComponent } from './double-charts.component';

describe('DoubleChartsComponent', () => {
  let component: DoubleChartsComponent;
  let fixture: ComponentFixture<DoubleChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
