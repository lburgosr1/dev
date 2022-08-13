import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutHttpComponent } from './doughnut-http.component';

describe('DoughnutHttpComponent', () => {
  let component: DoughnutHttpComponent;
  let fixture: ComponentFixture<DoughnutHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
