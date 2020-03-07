import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  titulo: string = 'Página de login';
  formLogin = new FormGroup({
    login: new FormControl('', [ Validators.email, Validators.required ]),
    senha: new FormControl('', [ Validators.required ]),
  })

  constructor (private loginService: LoginService,
    private router: Router
    )  {}

  handleLoginUsuario() {
      if(this.formLogin.invalid) {
        return false;
      }
      const loginDTO = {
        email: this.formLogin.get('login').value,
        password: this.formLogin.get('senha').value
      };

      this.loginService
      .logar(loginDTO)
      .then((respostaDoServerEmObjeto) => {
        this.router.navigate(['/'])
        console.log(respostaDoServerEmObjeto);
      })
      .catch((erro) => {
        console.log(erro);
      }); 

  }
}
