import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosListaComponent } from './favoritos-lista.component';

describe('FavoritosListaComponent', () => {
  let component: FavoritosListaComponent;
  let fixture: ComponentFixture<FavoritosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
