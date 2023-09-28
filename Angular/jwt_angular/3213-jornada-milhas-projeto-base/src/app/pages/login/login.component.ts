import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      senha: [null ]
    })
  }

  login(){
    console.log('Login realizado com sucesso', this.loginForm.value)
  }


}
