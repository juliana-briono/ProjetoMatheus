import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VooCadastroComponent } from './voo-cadastro.component';

describe('VooCadastroComponent', () => {
  let component: VooCadastroComponent;
  let fixture: ComponentFixture<VooCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VooCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VooCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
