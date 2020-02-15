import { Directive, ElementRef} from '@angular/core';

@Directive ({

    selector:'[cmailInputField]',
})

export class CmailInputFieldDirective {
    //Extender coisas HTML
    //Injeção de Dependências / Inversão de Controle

    constructor (referenciaProElemento: ElementRef) {
        console.log('CmailInputField');
        const inputDaTela = referenciaProElemento.nativeElement;
        inputDaTela.classList.add('mdl-textfield__input')
    }
}