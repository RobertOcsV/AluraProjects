import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarPensamentoComponent } from './criar-pensamento.component';

describe('CriarPensamentoComponent', () => {
  let component: CriarPensamentoComponent;
  let fixture: ComponentFixture<CriarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensamentoComponent ],
      imports: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
