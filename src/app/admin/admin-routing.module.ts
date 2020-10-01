import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoneyPotClientDetailComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail.component';
import { HoneyPotClientDetailFormComponent } from './pages/honey-pot-client-detail/honey-pot-client-detail-form/honey-pot-client-detail-form.component';
import { ClientProfileComponent } from './pages/honey-pot-client-detail/client-profile/client-profile.component';
import { CountryComponent } from './pages/country/country.component';
import { LicenseComponent } from './pages/license/license.component';
import { LicenseFormComponent } from './pages/license/license-form/license-form.component';
import { AccAccountlistComponent } from './Pages/accounts/acc-accountlist/acc-accountlist.component';
import { AccLegalComponent } from './Pages/accounts/acc-legal/acc-legal.component';
import { AccAuthorizationComponent } from './Pages/accounts/acc-authorization/acc-authorization.component';
import { AccAuthorViewComponent } from './Pages/accounts/acc-author-view/acc-author-view.component';
import { UsrContactrecordingComponent } from './Pages/users/usr-contactrecording/usr-contactrecording.component';
import { UsrActioncodeComponent } from './Pages/users/usr-actioncode/usr-actioncode.component';
import { UsrAddnewaddressComponent } from './Pages/users/usr-addnewaddress/usr-addnewaddress.component';
import { UsrAddressdetailsComponent } from './Pages/users/usr-addressdetails/usr-addressdetails.component';
import { UsrAdhocscreenComponent } from './Pages/users/usr-adhocscreen/usr-adhocscreen.component';
import { UsrAllocationhistoryComponent } from './Pages/users/usr-allocationhistory/usr-allocationhistory.component';
import { UsrCustomerdetailsComponent } from './Pages/users/usr-customerdetails/usr-customerdetails.component';
import { UsrCustomerleaccountComponent } from './Pages/users/usr-customerleaccount/usr-customerleaccount.component';
import { UsrDocumnetretrievalComponent } from './Pages/users/usr-documnetretrieval/usr-documnetretrieval.component';
import { UsrExcelexportComponent } from './Pages/users/usr-excelexport/usr-excelexport.component';
import { UsrFollowupsaveComponent } from './Pages/users/usr-followupsave/usr-followupsave.component';
import { UsrFollowuptakeComponent } from './Pages/users/usr-followuptake/usr-followuptake.component';
import { UsrFollowuptakeoneComponent } from './Pages/users/usr-followuptakeone/usr-followuptakeone.component';
import { UsrFollowuptrailsComponent } from './Pages/users/usr-followuptrails/usr-followuptrails.component';
import { UsrGurantordetailsComponent } from './Pages/users/usr-gurantordetails/usr-gurantordetails.component';
import { UsrLoandetailsComponent } from './Pages/users/usr-loandetails/usr-loandetails.component';
import { UsrLogoffusersComponent } from './Pages/users/usr-logoffusers/usr-logoffusers.component';
import { UsrOverduedetailsoneComponent } from './Pages/users/usr-overduedetailsone/usr-overduedetailsone.component';
import { UsrOverduedetailstwoComponent } from './Pages/users/usr-overduedetailstwo/usr-overduedetailstwo.component';
import { UsrPaymentdetailsComponent } from './Pages/users/usr-paymentdetails/usr-paymentdetails.component';
import { UsrPaymentdetailsoneComponent } from './Pages/users/usr-paymentdetailsone/usr-paymentdetailsone.component';
import { UsrPhonedetailsComponent } from './Pages/users/usr-phonedetails/usr-phonedetails.component';
import { UsrReferaccountComponent } from './Pages/users/usr-referaccount/usr-referaccount.component';
import { UsrReportComponent } from './Pages/users/usr-report/usr-report.component';
import { UsrRpoComponent } from './Pages/users/usr-rpo/usr-rpo.component';
import { UsrScreenaccesscontrolComponent } from './Pages/users/usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from './Pages/users/usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontrolthreeComponent } from './Pages/users/usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrScreenaccesscontroltwoComponent } from './Pages/users/usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccessoneComponent } from './Pages/users/usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from './Pages/users/usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrUserdetailsComponent } from './Pages/users/usr-userdetails/usr-userdetails.component';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client-form', component: HoneyPotClientDetailFormComponent },
  { path: 'Clients', component: HoneyPotClientDetailComponent },
  { path: 'Client_profile', component: ClientProfileComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'License', component: LicenseComponent },
  { path: 'License_Form', component: LicenseFormComponent },


  //////Accounts//////
  { path: 'accounts/accounts', component: AccAccountlistComponent },
  { path: 'accounts/legal', component: AccLegalComponent },
  { path: 'accounts/authorization', component: AccAuthorizationComponent },
  { path: 'accounts/view_authorization', component: AccAuthorViewComponent },

  /////user//////
  { path: 'user/createuser', component: UsrContactrecordingComponent },
  { path: 'user/actioncode', component: UsrActioncodeComponent },
  { path: 'user/addnewaddres', component: UsrAddnewaddressComponent },
  { path: 'user/addresdetails', component: UsrAddressdetailsComponent },
  { path: 'user/adhoc', component: UsrAdhocscreenComponent },
  { path: 'user/allocationhistroy', component: UsrAllocationhistoryComponent },
  { path: 'user/customerdetails', component: UsrCustomerdetailsComponent },
  { path: 'user/customeraccounts', component: UsrCustomerleaccountComponent },
  { path: 'user/documentretrieval', component: UsrDocumnetretrievalComponent },
  { path: 'user/excelexport', component: UsrExcelexportComponent },
  { path: 'user/followupsave', component: UsrFollowupsaveComponent },
  { path: 'user/followuptake', component: UsrFollowuptakeComponent },
  { path: 'user/followuptake1', component: UsrFollowuptakeoneComponent },
  { path: 'user/followuptrails', component: UsrFollowuptrailsComponent },
  { path: 'user/guarantordetails', component: UsrGurantordetailsComponent },
  { path: 'user/loandetails', component: UsrLoandetailsComponent },
  { path: 'user/logoffuser', component: UsrLogoffusersComponent },
  { path: 'user/overduedetails', component: UsrOverduedetailsoneComponent },
  { path: 'user/overduedetails1', component: UsrOverduedetailstwoComponent },
  { path: 'user/paymentsdetails', component: UsrPaymentdetailsComponent },
  { path: 'user/paymentsdetails1', component: UsrPaymentdetailsoneComponent },
  { path: 'user/phonedetails', component: UsrPhonedetailsComponent },
  { path: 'user/referaccount', component: UsrReferaccountComponent },
  { path: 'user/reports', component: UsrReportComponent },
  { path: 'user/rpodetails', component: UsrRpoComponent },
  { path: 'user/screenaccess', component: UsrScreenaccesscontrolComponent },
  { path: 'user/screenaccess1', component: UsrScreenaccesscontroloneComponent },
  { path: 'user/screenaccess2', component: UsrScreenaccesscontroltwoComponent },
  { path: 'user/screenaccess3', component:  UsrScreenaccesscontrolthreeComponent},
  { path: 'user/screencontrol', component:  UsrScreenaccessoneComponent },
  { path: 'user/screencontrol1', component: UsrScreenaccesstwoComponent },
  { path: 'user/screen1', component: UsrContactrecordingComponent },
  { path: 'user/screen2', component: UsrContactrecordingComponent },
  { path: 'user/screen3', component: UsrContactrecordingComponent },
  { path: 'user/userdetails', component: UsrUserdetailsComponent },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
