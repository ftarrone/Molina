import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',

})

export class CmailCadastroComponent {

  formControl = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(4)]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  })


  constructor() {

  }

  cadastrar() {
    console.log('Submit realizadp com sucesso!!');
    console.log('valid?', this.formControl.get('name').valid);

    if (this.formControl.valid) {
      console.log("Success");
    } else {
      Object.keys(this.formControl.controls).forEach((nomeDoCampo) => {
        console.log(nomeDoCampo);
        this.formControl.get(nomeDoCampo).markAllAsTouched();
      })
    }
  }
}  
