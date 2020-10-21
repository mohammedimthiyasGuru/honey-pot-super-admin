import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsrCollectionRecordingComponent } from './../usr-collection-recording/usr-collection-recording.component';

@Component({
  selector: 'app-usr-collection-recording-main-list',
  templateUrl: './usr-collection-recording-main-list.component.html',
  styleUrls: ['./usr-collection-recording-main-list.component.css']
})
export class UsrCollectionRecordingMainListComponent implements OnInit {
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
    const dialogRef = this.dialog.open(UsrCollectionRecordingComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
