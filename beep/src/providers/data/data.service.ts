import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import "rxjs/add/operator/take";

@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase) {
    
  }

  getProfile(user: User) {
    //preserveSnapshot - read more.
    this.profileObject = this.database.object(`/profiles/${user.uid}`, {preserveSnapshot: true});

    return this.profileObject.take(1);
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
