import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
    ComponentsModule
  ],
  exports: [
    ProfileSearchResultsPage
  ]
})
export class ProfileSearchResultsPageModule {}
