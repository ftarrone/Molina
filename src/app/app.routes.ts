import { Routes,RouterModule } from '@angular/router';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';


const rotas : Routes = [
    {path : '' ,component : InboxComponent},
    {path : 'cadastro' ,component : CmailCadastroComponent},
    {path : '**', redirectTo : ''}
]
export const ModuloDeRotasConfiguradas = RouterModule.forRoot(rotas);


// teste
