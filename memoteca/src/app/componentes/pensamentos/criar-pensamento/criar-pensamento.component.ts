import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {



  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'

  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe

  }

  cancelar(){
    alert("teste")
  }

}
