import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    InboxComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [],  
  bootstrap: [AppComponent]
})

export class AppModule { }
