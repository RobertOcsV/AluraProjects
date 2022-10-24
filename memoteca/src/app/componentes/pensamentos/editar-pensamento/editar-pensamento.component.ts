import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0 ,
    conteudo: '',
    autoria: '',
    modelo: ''

  }

  constructor() { }

  ngOnInit(): void {
  }

  editarPensamento(){

  }

  cancelar(){}
}
