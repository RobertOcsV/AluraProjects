import { Component } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
