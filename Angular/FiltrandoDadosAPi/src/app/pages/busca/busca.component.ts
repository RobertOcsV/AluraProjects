import { Component, OnInit } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  constructor(private passagemService: PassagensService) { }

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageiroAdultos: 1,
      tipo: "Executiva"
    }
    this.passagemService.getPassagens(buscaPadrao)
      .subscribe(
        resposta => {
          console.log(resposta)
        }
      )
  }
}
