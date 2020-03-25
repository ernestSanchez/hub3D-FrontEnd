import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectdetailComponent } from './proyectdetail.component';

describe('ProyectdetailComponent', () => {
  let component: ProyectdetailComponent;
  let fixture: ComponentFixture<ProyectdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
