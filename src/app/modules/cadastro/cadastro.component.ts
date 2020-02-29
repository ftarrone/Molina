import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';


function validatorUsername(formControl) {
  const url = "http://localhost:3200/users/validation/${formControl.value}";
  return fetch(url)
  .then((respostaDoServer) => {
      if(respostaDoServer.ok){
      return null;
    }
  throw new Error('Usuário já foi Pego =X')
  })
.catch(() => {
   return {userTaken:true}
  });
}


@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',

})

export class CmailCadastroComponent {

  formControl = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(4)]),
    username: new FormControl('', 
    [Validators.required],
    [validatorUsername],
    [this.validateUsernameComRxJS.bind(this)]),
    password: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
  })


  constructor(private httpClient:HttpClient) {
    const url = "http://localhost:3200/users/validation/${formControl.value}";
    //Entrada de Dados
      this.httpClient.get(url)
    // Processamento de Dados
      .pipe(
        map((input:string) => {
          console.warn('Dentro do Map', input);
        }),
      catchError(() => {
        //Se der erro
          return 'Deu ruim';
      })
        
      )  



  }

  validateUsernameComRxJS (formControl){
    const url = "http://localhost:3200/users/validation/${formControl.value}";
    return this.httpClient.get(url)
  }


  cadastrar() {
    console.log('Submit realizadp com sucesso!!');
    console.log('valid?', this.formControl.get('name').valid);

    if (this.formControl.valid) {
      console.log("Success");

      fetch('http://localhost:3200/users', {

        method: 'POST',
        body: JSON.stringify({
          "name": "Fernando4",
          "username": "Fernando4",
          "phone": "123456783",
          "password": "23452",
          "avatar": "Fernand"
        }),
        headers:{
          'content-type': 'application/json'
        }
      }
    )
    } else {
      Object.keys(this.formControl.controls).forEach((nomeDoCampo) => {
        console.log(nomeDoCampo);
        this.formControl.get(nomeDoCampo).markAllAsTouched();
      })
    }
  }
}  
