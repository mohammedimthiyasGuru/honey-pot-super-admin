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



@Component({
  selector: 'app-usr-contactrecording',
  templateUrl: './usr-contactrecording.component.html',
  styleUrls: ['./usr-contactrecording.component.css']
})
export class UsrContactrecordingComponent implements OnInit {

  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog) { }



  ngOnInit(): void {
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
    { type: "Cat", name: "cat1" }]

  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  show1() {
    const dialogRef = this.dialog.open(UsrCustomerdetailsComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  show2() {
    const dialogRef = this.dialog.open(UsrGurantordetailsComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show3() {
    const dialogRef = this.dialog.open(UsrAllocationhistoryComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show4() {
    const dialogRef = this.dialog.open(UsrFollowuptrailsComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show5() {
    const dialogRef = this.dialog.open(UsrLoandetailsComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show6() {
    const dialogRef = this.dialog.open(UsrCustomerleaccountComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show7() {
    const dialogRef = this.dialog.open(UsrOverduedetailsoneComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  show8() {
    const dialogRef = this.dialog.open(UsrRpoComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  show9() {
    const dialogRef = this.dialog.open(UsrDocumnetretrievalComponent, {
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


