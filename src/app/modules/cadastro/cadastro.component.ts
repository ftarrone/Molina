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

cadastrar() {
  console.log(this.formControl.value);
}

}
  



