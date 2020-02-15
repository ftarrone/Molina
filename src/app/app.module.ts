import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { CmailInputFieldDirective } from './modules/cmail-input-field.directive';
import { CmailFormGroup } from './component/cmail-form-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    InboxComponent,
    CmailFormGroup,
    CmailInputFieldDirective

        

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloDeRotasConfiguradas,
    ReactiveFormsModule
 
    
  ],
  providers: [],  
  bootstrap: [AppComponent]
})

export class AppModule { }
