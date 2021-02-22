import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsrCustomerdetailsComponent } from '../usr-customerdetails/usr-customerdetails.component';
import { UsrActioncodeComponent } from '../usr-actioncode/usr-actioncode.component';
import { UsrAddnewaddressComponent } from '../usr-addnewaddress/usr-addnewaddress.component';
import { UsrAdhocscreenComponent } from '../usr-adhocscreen/usr-adhocscreen.component';
import { UsrAllocationhistoryComponent } from '../usr-allocationhistory/usr-allocationhistory.component';
import { UsrCustomerleaccountComponent } from '../usr-customerleaccount/usr-customerleaccount.component';
import { UsrDocumnetretrievalComponent } from '../usr-documnetretrieval/usr-documnetretrieval.component';
import { UsrExcelexportComponent } from '../usr-excelexport/usr-excelexport.component';
import { UsrFollowupsaveComponent } from '../usr-followupsave/usr-followupsave.component';
import { UsrFollowuptakeComponent } from '../usr-followuptake/usr-followuptake.component';
import { UsrFollowuptakeoneComponent } from '../usr-followuptakeone/usr-followuptakeone.component';
import { UsrFollowuptrailsComponent } from '../usr-followuptrails/usr-followuptrails.component';
import { UsrGurantordetailsComponent } from '../usr-gurantordetails/usr-gurantordetails.component';
import { UsrLoandetailsComponent } from '../usr-loandetails/usr-loandetails.component';
import { UsrLogoffusersComponent } from '../usr-logoffusers/usr-logoffusers.component';
import { UsrOverduedetailsoneComponent } from '../usr-overduedetailsone/usr-overduedetailsone.component';
import { UsrOverduedetailstwoComponent } from '../usr-overduedetailstwo/usr-overduedetailstwo.component';
import { UsrPaymentdetailsComponent } from '../usr-paymentdetails/usr-paymentdetails.component';
import { UsrPaymentdetailsoneComponent } from '../usr-paymentdetailsone/usr-paymentdetailsone.component';
import { UsrPhonedetailsComponent } from '../usr-phonedetails/usr-phonedetails.component';
import { UsrReferaccountComponent } from '../usr-referaccount/usr-referaccount.component';
import { UsrReportComponent } from '../usr-report/usr-report.component';
import { UsrRpoComponent } from '../usr-rpo/usr-rpo.component';
import { UsrScreenaccessoneComponent } from '../usr-screenaccessone/usr-screenaccessone.component';
import { UsrScreenaccesstwoComponent } from '../usr-screenaccesstwo/usr-screenaccesstwo.component';
import { UsrScreenaccessthreeComponent } from '../usr-screenaccessthree/usr-screenaccessthree.component';
import { UsrScreenaccesscontrolComponent } from '../usr-screenaccesscontrol/usr-screenaccesscontrol.component';
import { UsrScreenaccesscontroloneComponent } from '../usr-screenaccesscontrolone/usr-screenaccesscontrolone.component';
import { UsrScreenaccesscontroltwoComponent } from '../usr-screenaccesscontroltwo/usr-screenaccesscontroltwo.component';
import { UsrScreenaccesscontrolthreeComponent } from '../usr-screenaccesscontrolthree/usr-screenaccesscontrolthree.component';
import { UsrUserdetailsComponent } from '../usr-userdetails/usr-userdetails.component';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UsrAllocationdetailComponent } from '../usr-allocationdetail/usr-allocationdetail.component';
import { UsrCollateraldetailssComponent } from './../usr-collateraldetailss/usr-collateraldetailss.component';
import { UsrWorkflowComponent } from './../usr-workflow/usr-workflow.component';
import { UsrCollectionRecordingComponent } from './../usr-collection-recording/usr-collection-recording.component';
import { UsrCollectionRecordingMainListComponent } from './../usr-collection-recording-main-list/usr-collection-recording-main-list.component';
import { UsrSettlementRecordingMainListComponent } from './../usr-settlement-recording-main-list/usr-settlement-recording-main-list.component';

import { UsrPoliceCaseComponent } from './../usr-police-case/usr-police-case.component';

import { UsrSkipTracingMainComponent } from './../usr-skip-tracing-main/usr-skip-tracing-main.component';
import { UsrFiledVisitMainComponent } from './../usr-filed-visit-main/usr-filed-visit-main.component';
import Swal from 'sweetalert2';
import { UsrCustomerExplosureComponent } from './../usr-customer-explosure/usr-customer-explosure.component';

@Component({
  selector: 'app-usr-contactrecording',
  templateUrl: './usr-contactrecording.component.html',
  styleUrls: ['./usr-contactrecording.component.css']
})
export class UsrContactrecordingComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  rows = [];
  searchQR: any;
  value1: any;
  del:boolean = false;
  show:any;
  assets:boolean = false;
  payment:boolean = false;
  displayPosition :boolean = false;
  multipleAccountInformation = [];
  constructor(
    private router: Router,
    public dialog: MatDialog,
    ) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" }];

    this.multipleAccountInformation = [
      { LoanNumber:"123456", Product: "Auto Loan", LoanAmount: "10,00000", OutstandingAmount: "50,0000", TotalOverdueAmount: "2000", NextInstallmentAmount: "20000", NextInstallmentDueDate: "20-10-2020", Bucket: "23", MinimumamountforBucketmovement: "5", UnitCode: "BC23", },
      { LoanNumber:"789654", Product: "NA", LoanAmount: "NA", OutstandingAmount: "NA", TotalOverdueAmount: "NA", NextInstallmentAmount: "NA", NextInstallmentDueDate: "NA", Bucket: "NA", MinimumamountforBucketmovement: "NA", UnitCode: "NA", },
      { LoanNumber:"786786", Product: "Auto Loan", LoanAmount: "15,00000", OutstandingAmount: "55,0000", TotalOverdueAmount: "4000", NextInstallmentAmount: "40000", NextInstallmentDueDate: "20-01-2021", Bucket: "32", MinimumamountforBucketmovement: "5", UnitCode: "BC23", },
    ]
  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  showPositionDialog() {
    this.displayPosition = true;
}

  show1() {
    const dialogRef = this.dialog.open(UsrFollowuptakeComponent, {
      height: '350px',
      width:'90%',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show1';
    // this.followuptake = true;
    // this.selectedIndex = 21;
  }


  show2() {
    const dialogRef = this.dialog.open(UsrWorkflowComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show2';
    // this.workflow = true;
    // this.selectedIndex = 22;
  }
  show3() {
    const dialogRef = this.dialog.open(UsrCollectionRecordingMainListComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show3';
  }
  show4() {
    const dialogRef = this.dialog.open(UsrSettlementRecordingMainListComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show4';
  }

  show5() {
    const dialogRef = this.dialog.open(UsrPoliceCaseComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show5';
  }
  show6() {
    const dialogRef = this.dialog.open(UsrCustomerleaccountComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show7() {
    const dialogRef = this.dialog.open(UsrOverduedetailsoneComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show8() {
    const dialogRef = this.dialog.open(UsrSkipTracingMainComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show8';
  }
  show9() {
    const dialogRef = this.dialog.open(UsrFiledVisitMainComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.show = 'show9';
  }
  show10() {
    const dialogRef = this.dialog.open(UsrPaymentdetailsComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show11() {
    const dialogRef = this.dialog.open(UsrPhonedetailsComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show12() {
    const dialogRef = this.dialog.open(UsrOverduedetailstwoComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show13() {
    const dialogRef = this.dialog.open(UsrCustomerExplosureComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show14() {
    const dialogRef = this.dialog.open(UsrAllocationhistoryComponent, {
      height: '600px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  close(){
    this.dialog.closeAll();
  }

  openworklist(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to open in a new tab!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        let url: any = '#/admin_panel/accounts/accounts';
        window.open(url, '_blank');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigateByUrl('/admin_panel/accounts/accounts')
      }
    })

  }

  openworklist1(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to make a call',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
    });

  }

  openworklist2(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'You want to send the mail',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {

    });

  }


  asset(){
    this.assets = !this.assets;
  }
  pay(){
    this.payment = !this.payment;
  }

}


