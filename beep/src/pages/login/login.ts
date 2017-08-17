import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toast: ToastController, 
              private navCtrl: NavController, 
              private navParams: NavParams) {
  }

  login(event: LoginResponse) {    
    if(!event.error) {
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('EditProfilePage');

    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present(); 
    }
  }
}
