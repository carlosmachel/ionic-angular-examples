import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from "./register-form/register-form.component";
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ]
})
export class ComponentsModule {
    
}
