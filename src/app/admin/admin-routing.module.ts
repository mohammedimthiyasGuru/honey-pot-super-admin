import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoneyPotClientDetailComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail.component';
import { HoneyPotClientDetailFormComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail-form/honey-pot-client-detail-form.component';
import { ClientProfileComponent } from './pages/honey-pot-client-detail/client-profile/client-profile.component';
import { CountryComponent } from './pages/country/country.component';
import { LicenseComponent } from './pages/license/license.component';
import { LicenseFormComponent } from './pages/license/license-form/license-form.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client-form', component: HoneyPotClientDetailFormComponent },
  { path: 'Clients', component: HoneyPotClientDetailComponent },
  { path: 'Client_profile', component: ClientProfileComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'License', component: LicenseComponent },
  { path: 'License_Form', component: LicenseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
