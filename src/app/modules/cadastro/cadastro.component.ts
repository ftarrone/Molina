import { Component,Input } from '@angular/core';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html'

})

export class CmailCadastroComponent {
  @Input() title_header = '';
  IsMenuOpen = false
  toggleMenu() {
   this.IsMenuOpen = !this.IsMenuOpen
      }
   
  }
  



