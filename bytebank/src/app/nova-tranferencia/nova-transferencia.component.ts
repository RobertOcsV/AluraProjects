import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponents {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }

}
