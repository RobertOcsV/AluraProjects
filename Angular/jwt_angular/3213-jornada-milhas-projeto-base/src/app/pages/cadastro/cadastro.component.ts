import { CadastroService } from './../../core/services/cadastro.service';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;


  constructor(private FormularioService: FormularioService, private cadastroService: CadastroService, private router: Router){}

  cadastrar(){

    const formCadastro = this.FormularioService.getCadastro()

    if(formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value: any) => {
          console.log('Cadastro Realizado com sucesso', value);
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      })
    }

  }
}
