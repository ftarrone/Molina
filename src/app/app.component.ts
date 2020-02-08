import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caixa de Entrada';
  IsNewEmailOpen = false



  emails = [
   
  ];

  novoEmail = {
    assunto : 'Mano ola que Show!',
    conteudo :'Alo Alo',
    para:'fernando.t.molina@123.com'
  }


  newEmail() {
    this.IsNewEmailOpen = !this.IsNewEmailOpen
}

hsndleSubmitOfNewEmail (){

  event.preventDefault();
  console.log('this.novoEmail',this.novoEmail);
  this.emails.push(this.novoEmail);
  this.novoEmail = { 
    assunto:  '',
    conteudo:  '',
    para:  ''
  };
}

}



  


