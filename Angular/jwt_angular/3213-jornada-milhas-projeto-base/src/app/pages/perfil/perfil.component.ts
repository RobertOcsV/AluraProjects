import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  titulo = 'Olá pessoa';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  deslogar(){
    console.log('Logout realizado com sucesso')
  }

  atualizar(){
    console.log('Cadastro atualizado com sucesso')
  }
}
