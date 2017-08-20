import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  saveProfileResult(event : Boolean) {
    event ? this.navCtrl.setRoot('TabsPage') : console.log('Not authenticated or saved.');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
