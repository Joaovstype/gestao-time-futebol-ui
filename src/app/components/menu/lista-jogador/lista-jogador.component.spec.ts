import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogadorComponent } from './lista-jogador.component';

describe('ListaJogadorComponent', () => {
  let component: ListaJogadorComponent;
  let fixture: ComponentFixture<ListaJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJogadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
