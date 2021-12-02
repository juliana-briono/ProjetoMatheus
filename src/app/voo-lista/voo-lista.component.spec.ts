import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VooListaComponent } from './voo-lista.component';

describe('VooListaComponent', () => {
  let component: VooListaComponent;
  let fixture: ComponentFixture<VooListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VooListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VooListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
