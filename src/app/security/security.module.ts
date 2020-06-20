import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityComponent } from './security.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    SignInComponent, 
    SignUpComponent, 
    SecurityComponent, 
    ProfileEditComponent,
  ],
  imports: [CommonModule,SecurityRoutingModule,FormsModule, ReactiveFormsModule],

})
export class SecurityModule { }
