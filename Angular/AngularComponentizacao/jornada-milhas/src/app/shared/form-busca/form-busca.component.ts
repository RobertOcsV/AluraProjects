import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuscaService } from './../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})




export class FormBuscaComponent {

  constructor(public formBuscaService: FormBuscaService) {}

private today = new Date();
private month = this.today.getMonth();
private year = this.today.getFullYear();


  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });

  buscar() {
    console.log(this.formBuscaService.formBusca.value)
  }

}
