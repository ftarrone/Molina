import { Component, Input} from '@angular/core';

@Component ({

    selector: 'cmail-inbox-page',
    templateUrl: './inbox.component.html',
    
})

export class InboxComponent {

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
  