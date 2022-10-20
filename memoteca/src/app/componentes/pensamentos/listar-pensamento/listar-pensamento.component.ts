import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    //   conteudo: 'teste de batata',
    //   autoria: 'Angular',
    //   modelo: 'modelo1'

    // },
    // {
    //   conteudo: 'aassb',
    //   autoria: 'Angular',
    //   modelo: 'modelo2'

    // }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
