import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { CardBuscaComponent } from './card-busca.component';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBuscaComponent]
    });
    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return object promocao ', () => {
     const promocaoArray = []
  })
});
