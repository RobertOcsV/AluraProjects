import { CadastroService } from './../../core/services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  nome = '';
  token = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(private tokenService: TokenService, private cadastroService: CadastroService, private formularioService: FormularioService){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(cadastro => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome
      this.carregarFormulario();
    })
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      id: this.cadastro.id,
      nome: this.cadastro.nome ,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado
    })
  }



  deslogar(){
    console.log('Logout realizado com sucesso')
  }

  atualizar(){
    console.log('Cadastro atualizado com sucesso')
  }
}
