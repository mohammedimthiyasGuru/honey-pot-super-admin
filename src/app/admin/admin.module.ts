import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
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
import { UsrScreenaccessoneComponent } from './Pages/users/usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from './Pages/users/usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrScreenaccessthreeComponent } from './Pages/users/usr-screenaccessthree/usr-screenaccessthree.component';
import { UsrScreenaccesscontrolComponent } from './Pages/users/usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from './Pages/users/usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontroltwoComponent } from './Pages/users/usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccesscontrolthreeComponent } from './Pages/users/usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrUserdetailsComponent } from './Pages/users/usr-userdetails/usr-userdetails.component';
import { MatTabsModule } from '@angular/material/tabs';
// import { FlexLayoutModule } from "@angular/flex-layout";

import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [AdminHeaderComponent,
    AdminSidebarComponent,
    DashboardComponent,
    HoneyPotClientDetailComponent,
    HoneyPotClientDetailFormComponent,
    ClientProfileComponent,
    CountryComponent,
    LicenseComponent,
    LicenseFormComponent,
    AccAccountlistComponent,
    AccLegalComponent,
    AccAuthorizationComponent,
    AccAuthorViewComponent,
    UsrContactrecordingComponent,
    UsrActioncodeComponent,
    UsrAddnewaddressComponent,
    UsrAddressdetailsComponent,
    UsrAdhocscreenComponent,
    UsrAllocationhistoryComponent,
    UsrCustomerdetailsComponent,
    UsrCustomerleaccountComponent,
    UsrDocumnetretrievalComponent,
    UsrExcelexportComponent,
    UsrFollowupsaveComponent,
    UsrFollowuptakeComponent,
    UsrFollowuptakeoneComponent,
    UsrFollowuptrailsComponent,
    UsrGurantordetailsComponent,
    UsrLoandetailsComponent,
    UsrLogoffusersComponent,
    UsrOverduedetailsoneComponent,
    UsrOverduedetailstwoComponent,
    UsrPaymentdetailsComponent,
    UsrPaymentdetailsoneComponent,
    UsrPhonedetailsComponent,
    UsrReferaccountComponent,
    UsrReportComponent,
    UsrRpoComponent,
    UsrScreenaccessoneComponent,
    UsrScreenaccesstwoComponent,
    UsrScreenaccessthreeComponent,
    UsrScreenaccesscontrolComponent,
    UsrScreenaccesscontroloneComponent,
    UsrScreenaccesscontroltwoComponent,
    UsrScreenaccesscontrolthreeComponent,
    UsrUserdetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    Ng2SearchPipeModule,
    TableModule,
    FileUploadModule,
    TooltipModule,
    MultiSelectModule,
    ChartModule,
    MatTabsModule,
    // FlexLayoutModule,
    MatTooltipModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    UsrContactrecordingComponent,
    UsrActioncodeComponent,
    UsrAddnewaddressComponent,
    UsrAddressdetailsComponent,
    UsrAdhocscreenComponent,
    UsrAllocationhistoryComponent,
    UsrCustomerdetailsComponent,
    UsrCustomerleaccountComponent,
    UsrDocumnetretrievalComponent,
    UsrExcelexportComponent,
    UsrFollowupsaveComponent,
    UsrFollowuptakeComponent,
    UsrFollowuptakeoneComponent,
    UsrFollowuptrailsComponent,
    UsrGurantordetailsComponent,
    UsrLoandetailsComponent,
    UsrLogoffusersComponent,
    UsrOverduedetailsoneComponent,
    UsrOverduedetailstwoComponent,
    UsrPaymentdetailsComponent,
    UsrPaymentdetailsoneComponent,
    UsrPhonedetailsComponent,
    UsrReferaccountComponent,
    UsrReportComponent,
    UsrRpoComponent,
    UsrScreenaccessoneComponent,
    UsrScreenaccesstwoComponent,
    UsrScreenaccessthreeComponent,
    UsrScreenaccesscontrolComponent,
    UsrScreenaccesscontroloneComponent,
    UsrScreenaccesscontroltwoComponent,
    UsrScreenaccesscontrolthreeComponent,
    UsrUserdetailsComponent,
  ]
})
export class AdminModule { }
