import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthComponent} from './auth.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
