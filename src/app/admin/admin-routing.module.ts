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
import { UsrContactrecordingComponent } from './pages/users//usr-contactrecording/usr-contactrecording.component';
import { UsrActioncodeComponent } from './pages/users//usr-actioncode/usr-actioncode.component';
import { UsrAddnewaddressComponent } from './pages/users//usr-addnewaddress/usr-addnewaddress.component';
import { UsrAddressdetailsComponent } from './pages/users//usr-addressdetails/usr-addressdetails.component';
import { UsrAdhocscreenComponent } from './pages/users//usr-adhocscreen/usr-adhocscreen.component';
import { UsrAllocationhistoryComponent } from './pages/users//usr-allocationhistory/usr-allocationhistory.component';
import { UsrCustomerdetailsComponent } from './pages/users//usr-customerdetails/usr-customerdetails.component';
import { UsrCustomerleaccountComponent } from './pages/users//usr-customerleaccount/usr-customerleaccount.component';
import { UsrDocumnetretrievalComponent } from './pages/users//usr-documnetretrieval/usr-documnetretrieval.component';
import { UsrExcelexportComponent } from './pages/users//usr-excelexport/usr-excelexport.component';
import { UsrFollowupsaveComponent } from './pages/users//usr-followupsave/usr-followupsave.component';
import { UsrFollowuptakeComponent } from './pages/users//usr-followuptake/usr-followuptake.component';
import { UsrFollowuptakeoneComponent } from './pages/users//usr-followuptakeone/usr-followuptakeone.component';
import { UsrFollowuptrailsComponent } from './pages/users//usr-followuptrails/usr-followuptrails.component';
import { UsrGurantordetailsComponent } from './pages/users//usr-gurantordetails/usr-gurantordetails.component';
import { UsrLoandetailsComponent } from './pages/users//usr-loandetails/usr-loandetails.component';
import { UsrLogoffusersComponent } from './pages/users//usr-logoffusers/usr-logoffusers.component';
import { UsrOverduedetailsoneComponent } from './pages/users//usr-overduedetailsone/usr-overduedetailsone.component';
import { UsrOverduedetailstwoComponent } from './pages/users//usr-overduedetailstwo/usr-overduedetailstwo.component';
import { UsrPaymentdetailsComponent } from './pages/users//usr-paymentdetails/usr-paymentdetails.component';
import { UsrPaymentdetailsoneComponent } from './pages/users//usr-paymentdetailsone/usr-paymentdetailsone.component';
import { UsrPhonedetailsComponent } from './pages/users//usr-phonedetails/usr-phonedetails.component';
import { UsrReferaccountComponent } from './pages/users//usr-referaccount/usr-referaccount.component';
import { UsrReportComponent } from './pages/users//usr-report/usr-report.component';
import { UsrRpoComponent } from './pages/users//usr-rpo/usr-rpo.component';
import { UsrScreenaccesscontrolComponent } from './pages/users//usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from './pages/users//usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontrolthreeComponent } from './pages/users//usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrScreenaccesscontroltwoComponent } from './pages/users//usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccessoneComponent } from './pages/users//usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from './pages/users//usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrUserdetailsComponent } from './pages/users//usr-userdetails/usr-userdetails.component';
import { UsrAllocationdetailComponent } from './pages/users//usr-allocationdetail/usr-allocationdetail.component';
import { UsrCollateraldetailssComponent } from './pages/users//usr-collateraldetailss/usr-collateraldetailss.component';

import { ExcelUploadComponent } from './pages/excel-upload/excel-upload.component';
import { LocalaccallocComponent } from './pages/userflow/localaccalloc/localaccalloc.component';
import { LocalaccpendingComponent } from './pages/userflow/localaccpending/localaccpending.component';
import { LocalaccworkedComponent } from './pages/userflow/localaccworked/localaccworked.component';
import { LocalaccptpComponent } from './pages/userflow/localaccptp/localaccptp.component';
import { VechicleloanlistComponent } from './Pages/userflow/vechicleloanlist/vechicleloanlist.component';
import { PersonalloanlistComponent } from './Pages/userflow/personalloanlist/personalloanlist.component';
import { HomeloanlistComponent } from './Pages/userflow/homeloanlist/homeloanlist.component';
import { CreditcardlistComponent } from './Pages/userflow/creditcardlist/creditcardlist.component';
import { WithdrawexcelComponent } from './Pages/userflow/withdrawexcel/withdrawexcel.component';
import { WithdrawsingleComponent } from './Pages/userflow/withdrawsingle/withdrawsingle.component';
import { ReallowsingleComponent } from './Pages/userflow/reallowsingle/reallowsingle.component';
import { ReallowexcelComponent } from './Pages/userflow/reallowexcel/reallowexcel.component';
import { LinkdelinkComponent } from './Pages/userflow/linkdelink/linkdelink.component';
import { DedupeComponent } from './Pages/userflow/dedupe/dedupe.component';
import { AllocationsingleComponent } from './Pages/userflow/allocationsingle/allocationsingle.component';
import { AllocationexcelComponent } from './Pages/userflow/allocationexcel/allocationexcel.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client-form', component: HoneyPotClientDetailFormComponent },
  { path: 'Clients', component: HoneyPotClientDetailComponent },
  { path: 'Client_profile', component: ClientProfileComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'License', component: LicenseComponent },
  { path: 'License_Form', component: LicenseFormComponent },
  { path: 'Excel_Upload', component: ExcelUploadComponent },

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
  { path: 'user/usercollateraldetails', component: UsrCollateraldetailssComponent },



  { path: 'userflow/accallocate', component:  LocalaccallocComponent},
  { path: 'userflow/accworked', component: LocalaccworkedComponent },
  { path: 'userflow/accpending', component: LocalaccpendingComponent },
  { path: 'userflow/accptptoken', component: LocalaccptpComponent },

  { path: 'userflow/creditcardlist', component:  CreditcardlistComponent},
  { path: 'userflow/vehicleloanlist', component: VechicleloanlistComponent },
  { path: 'userflow/personaloanlist', component: PersonalloanlistComponent },
  { path: 'userflow/homeloanlist', component: HomeloanlistComponent },



  { path: 'userflow/allocationexcel', component:  AllocationexcelComponent},
  { path: 'userflow/allocationsingle', component: AllocationsingleComponent },
  { path: 'userflow/dedupe', component: DedupeComponent },
  { path: 'userflow/linkdeliknk', component: LinkdelinkComponent },
  { path: 'userflow/reallowexcel', component : ReallowexcelComponent },
  { path: 'userflow/reallowsingle', component: ReallowsingleComponent },
  { path: 'userflow/withdrawexcel', component: WithdrawexcelComponent },
  { path: 'userflow/withdrawsingle', component: WithdrawsingleComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
