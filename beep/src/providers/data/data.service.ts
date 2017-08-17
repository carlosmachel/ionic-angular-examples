import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase) {
    
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    
    try {

      await this.profileObject.set(profile);      
      return true;

    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
