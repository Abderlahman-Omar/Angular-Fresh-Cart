import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangepasswordComponent } from './settings/changepassword/changepassword.component';
import { ResetpasswordComponent } from './settings/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    ChangepasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
