import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {email: 'teste@teste.com.br', password: 'teste1234'} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);       
    this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }  
}
