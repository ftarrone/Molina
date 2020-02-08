import { Component,Input } from '@angular/core';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title_header = '';
  IsMenuOpen = false
  toggleMenu() {
   this.IsMenuOpen = !this.IsMenuOpen
      }
   
  }
  



