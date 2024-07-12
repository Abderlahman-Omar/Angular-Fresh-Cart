import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './settings/changepassword/changepassword.component';
import { ResetpasswordComponent } from './settings/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '', redirectTo: 'change', pathMatch: 'full' },
  { path: 'change', component: ChangepasswordComponent },
  { path: 'reset', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
