import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data: DataService,
              private toast: ToastController, 
              private navCtrl: NavController, 
              private navParams: NavParams) {
  }

  login(event: LoginResponse) {    
    if(!event.error) {
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.data.getProfile(<User>event.result).subscribe(profile => {
        //profile.val() read more.
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      });

    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present(); 
    }
  }
}
