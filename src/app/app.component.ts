import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 template: '<router-outlet> </router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caixa de Entrada';
  IsNewEmailOpen = false



  emails = [
   
  ];

  novoEmail = {
    assunto : '',
    conteudo :'',
    para:''
  }


  newEmail() {
    this.IsNewEmailOpen = !this.IsNewEmailOpen
}

hsndleSubmitOfNewEmail (formEmail){

  if (formEmail.invalid) {
    return  false;
  }


  this.emails.push(this.novoEmail);
  this.novoEmail = { 
    assunto:  '',
    conteudo:  '',
    para:  ''
  };
}

}



  


