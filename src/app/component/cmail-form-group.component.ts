import { Component,Input, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'cmail-form-field',
  templateUrl:'cmail-form-group,component.html',
  

})

export class CmailFormGroup {
 
      valorDaLabel = 'Bagulhos';
      @Input () campo = "";
    
    ngOnInit () {

      console.log('CmailFormGroup/ngOnInit');
      const inputDaTela = this.elementRef.nativeElement;
      const placeholder = inputDaTela.querySelector('input').getAttribute('placeholder');
      this.valorDaLabel = placeholder;
      inputDaTela.querySelector('input').setAttribute('placeholder', ' ');
      
      const nome = inputDaTela.querySelector('input').getAttribute('name');
      inputDaTela.setAttribute('id', nome);
      console.log(nome);
      console.log(this.campo);
      

    }
    
    constructor(private elementRef: ElementRef) {

    }

    }
   
  
  

