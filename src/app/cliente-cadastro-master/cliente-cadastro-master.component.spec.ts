import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastroMasterComponent } from './cliente-cadastro-master.component';

describe('ClienteCadastroMasterComponent', () => {
  let component: ClienteCadastroMasterComponent;
  let fixture: ComponentFixture<ClienteCadastroMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCadastroMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastroMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
