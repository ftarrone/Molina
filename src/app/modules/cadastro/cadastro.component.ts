import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',

})

export class CmailCadastroComponent {
  
  formControl = new FormGroup ({
    name : new FormControl('', [Validators.required]),
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    avatar : new FormControl('', [Validators.required]),
  })

   
constructor() {}

cadastrar(FormControl) {
  console.log(this.formControl.value);
  console.log(FormControl);

  if (FormControl = 'invalid') {

    var message = "Favor Preencher Formulário!";
    mensagem(message);
      
  } else {
    console.log(FormControl);
  }

}


  
}

function mensagem(message) {
  alert ("Favor Preencher Fomulário")
}
  



