import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from '../../mocks/messages/messages';
import { Message} from '../../models/messages/message.interface';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList : Message[] = MESSAGE_LIST;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.messageList);
  }

}
