import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent {

  @Input() depoimento: string = ``
  @Input() autoria: string = ``
  @Input() src: string = ''
  @Input() alt: string = ''
}
