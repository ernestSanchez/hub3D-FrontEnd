import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectcreateComponent } from './proyectcreate.component';

describe('ProyectcreateComponent', () => {
  let component: ProyectcreateComponent;
  let fixture: ComponentFixture<ProyectcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
