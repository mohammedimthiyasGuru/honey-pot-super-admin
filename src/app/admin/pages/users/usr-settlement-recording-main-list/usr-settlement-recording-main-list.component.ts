import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsrSettlementRecordingComponent } from './../usr-settlement-recording/usr-settlement-recording.component';
@Component({
  selector: 'app-usr-settlement-recording-main-list',
  templateUrl: './usr-settlement-recording-main-list.component.html',
  styleUrls: ['./usr-settlement-recording-main-list.component.css']
})
export class UsrSettlementRecordingMainListComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }



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
  show() {
    const dialogRef = this.dialog.open(UsrSettlementRecordingComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}