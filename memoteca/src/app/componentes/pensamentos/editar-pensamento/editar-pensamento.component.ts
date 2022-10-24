import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

constructor(
  private service: PensamentoService,
  private router: Router,
  private route: ActivatedRoute
) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
    } )
  }

  editarPensamento(){

    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])

    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])

  }
}
